// // @ts-ignore
// import backend from '@neos-project/neos-ui-backend-connector';

export function checkMediaCredits(
    image: Image,
    options: { assetCredits: AssetCredits },
    translate: TranslateMethod
): Promise<CheckResult> {
    const isValid = false; // TODO [SN]: Add proper validity check here

    return Promise.resolve({
        isValid: isValid,
        errorMessage: isValid ? '' : translate('checks.mediaCredits.error', `Media credits must be set`),
        value: '',
    });
}
