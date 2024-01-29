import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

// @ts-ignore
import backend from '@neos-project/neos-ui-backend-connector';
import { IconButton, Icon } from '@neos-project/react-ui-components';

import CheckResultItem from './CheckResultItem';
import { checkFilename, checkFileSize, checkFileDimensions, checkMediaCredits } from '../Checks';

import style from './ImageCheck.module.css';

interface Props {
    value: string | { __identity: string };
    options: ImageCheckOptions;
    translate: TranslateMethod;
}

const ImageCheck: React.FC<Props> = ({ value, options, translate }) => {
    const [image, setImage] = useState<Image>(null);
    const [mediaCredits, setMediaCredits] = useState<MediaCredits>(null);
    const [fileNameCheck, setFileNameCheck] = useState<CheckResult>(null);
    const [fileSizeCheck, setFileSizeCheck] = useState<CheckResult>(null);
    const [fileDimensionsCheck, setFileDimensionsCheck] = useState<CheckResult>(null);
    const [mediaIdCheck, setMediaIdCheck] = useState<CheckResult>(null);
    const [mediaLinkCheck, setMediaLinkCheck] = useState<CheckResult>(null);
    const [authorCheck, setAuthorCheck] = useState<CheckResult>(null);
    const [sourceOfSupplyCheck, setSourceOfSupplyCheck] = useState<CheckResult>(null);
    const [mediaCreditsError, setMediaCreditsError] = useState<boolean>(false);
    const [imageCheckVisible, setImageCheckVisible] = useState<boolean>(false);

    const toggleImageCheck = useCallback(() => {
        setImageCheckVisible((prevState) => !prevState);
    }, []);

    const hasWarning =
        fileNameCheck?.isValid === false ||
        fileSizeCheck?.isValid === false ||
        fileDimensionsCheck?.isValid === false ||
        mediaIdCheck?.isValid === false ||
        mediaLinkCheck?.isValid === false ||
        authorCheck?.isValid === false ||
        sourceOfSupplyCheck?.isValid === false;

    // Refetch image data when the image identity changes
    useEffect(() => {
        if (typeof value !== 'string' && value?.__identity) {
            const { loadImageMetadata } = backend.get().endpoints;
            loadImageMetadata(value.__identity).then(setImage);

            // get media credits data
            const mediaCreditsApi = window.location.origin + '/neos/api/media-browser-assets/show.json';
            loadImageMetadata(value.__identity).then((response: object) => {
                    axios.get(mediaCreditsApi, {
                        params: {
                            assetProxyIdentifier: response['object']['__identity']
                        }
                    }).then(response => {
                        setMediaCredits(response.data);
                        setMediaCreditsError(false);
                    }).catch(() => {
                        setMediaCreditsError(true);
                    });
                }
            )
        }
    }, [value]);

    // Rerun checks if image or mediaCredits changes
    useEffect(() => {
        if (image) {
            checkFilename(image.originalImageResourceUri, options.fileName, translate).then(setFileNameCheck);
            checkFileSize(image.originalImageResourceUri, options.fileSize, translate).then(setFileSizeCheck);

            // The dimensions check does not work for SVGs yet as the dimensions are not stored in the image metadata
            if (image.mediaType !== 'image/svg+xml') {
                checkFileDimensions(image.originalDimensions, options.fileDimensions, translate).then(
                    setFileDimensionsCheck
                );
            }
            if (mediaCredits) {
                checkMediaCredits(mediaCredits?.mediaId, 'checks.mediaCredits.mediaId.error', translate).then(setMediaIdCheck);
                checkMediaCredits(mediaCredits?.mediaLink, 'checks.mediaCredits.mediaLink.error', translate).then(setMediaLinkCheck);
                checkMediaCredits(mediaCredits?.author, 'checks.mediaCredits.author.error', translate).then(setAuthorCheck);
                checkMediaCredits(mediaCredits?.sourceOfSupply, 'checks.mediaCredits.sourceOfSupply.error', translate).then(setSourceOfSupplyCheck);
            }
        } else {
            setFileNameCheck(null);
            setFileSizeCheck(null);
            setFileDimensionsCheck(null);
            setMediaIdCheck(null);
            setMediaLinkCheck(null);
            setAuthorCheck(null);
            setSourceOfSupplyCheck(null);
        }
    }, [image, mediaCredits]);

    // Show image check if a warning is present
    useEffect(() => {
        if (hasWarning || mediaCreditsError) {
            setImageCheckVisible(true);
        }
    }, [hasWarning, mediaCreditsError]);

    if (!image) return null;

    return (
        <div className={style.imageCheck}>
            <IconButton
                icon={hasWarning || mediaCreditsError ? 'exclamation-triangle' : 'info'}
                size="small"
                style={hasWarning || mediaCreditsError ? 'warn' : imageCheckVisible ? 'brand' : 'lighter'}
                title={
                    hasWarning ? translate('checks.hasWarnings', 'The asset is invalid')
                        : (mediaCreditsError ?
                            translate('checks.mediaCredits.fetchError', 'Could not resolve media credits')
                            : translate('checks.valid', 'The asset is valid'))
                }
                onClick={toggleImageCheck}
            />
            {imageCheckVisible && (
                <div className={style.imageCheck__results}>
                    <table>
                        {fileNameCheck && (
                            <CheckResultItem
                                label={translate('checks.filename.label', 'Filename')}
                                checkResult={fileNameCheck}
                            />
                        )}
                        {fileSizeCheck && (
                            <CheckResultItem
                                label={translate('checks.filesize.label', 'Filesize')}
                                checkResult={fileSizeCheck}
                            />
                        )}
                        {fileDimensionsCheck && (
                            <CheckResultItem
                                label={translate('checks.dimensions.label', 'Dimensions')}
                                checkResult={fileDimensionsCheck}
                            />
                        )}
                        {mediaIdCheck && (
                            <CheckResultItem
                                label={translate('checks.mediaCredits.mediaId.label', 'Media ID')}
                                checkResult={mediaIdCheck}
                            />
                        )}
                        {mediaLinkCheck && (
                            <CheckResultItem
                                label={translate('checks.mediaCredits.mediaLink.label', 'Media Link')}
                                checkResult={mediaLinkCheck}
                            />
                        )}
                        {authorCheck && (
                            <CheckResultItem
                                label={translate('checks.mediaCredits.author.label', 'Author')}
                                checkResult={authorCheck}
                            />
                        )}
                        {sourceOfSupplyCheck && (
                            <CheckResultItem
                                label={translate('checks.mediaCredits.sourceOfSupply.label', 'Source of Supply')}
                                checkResult={sourceOfSupplyCheck}
                            />
                        )}
                    </table>
                    <div>
                        {mediaCreditsError && (
                            <div className={style.imageCheck__creditsFetchError}>
                                <Icon icon='exclamation-triangle' />
                                <span>{translate('checks.mediaCredits.fetchError', 'Could not resolve media credits')}
                            </span>
                            </div>
                        )}
                        <details className={style.imageCheck__creditsInfo}>
                            <summary>
                                {translate('checks.mediaCredits.info.label', 'Updating the data')}
                                <Icon icon='info-circle' />
                            </summary>
                            <p className={style.imageCheck__creditsInfoText}>
                                {translate('checks.mediaCredits.info', 'If the data has not been updated after changes were done, you can switch from this view to another module/tab, briefly select a different image or reload the page')}
                            </p>
                        </details>
                    </div>
                </div>
            )}
        </div>
    );
};

export default React.memo(ImageCheck);
