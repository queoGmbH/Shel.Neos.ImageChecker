export function checkMediaCredits(
    mediaCredit: string,
    translateId: string,
    translate: TranslateMethod
): Promise<CheckResult> {
    // check if mediaCredit is not an empty string
    return Promise.resolve({
        isValid: !!mediaCredit,
        errorMessage: !!mediaCredit ? '' : translate(translateId, `Media credits must be set`),
        value: mediaCredit ? mediaCredit : '-'
    });
}
