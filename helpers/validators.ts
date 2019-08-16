export const validateCNPJPattern = (value: string): boolean => /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/.test(value);
export const validateFilledText = (value: string): boolean => value.trim().length > 0;
export const validateCreditCardPattern = (value: string): boolean => /\d{4}\s\d{4}\s\d{4}\s\d{4}/.test(value);
export const validateLuhnAlg = (value: string): boolean => {
    const parsedValue = value.replace(/\D/g, '');
    let shouldDouble = false;

    const total = parsedValue
        .split('')
        .reverse()
        .map((digit): number => {
            let numDigit = parseInt(digit);

            if (shouldDouble && (numDigit *= 2) > 9) {
                numDigit -= 9;
            }

            shouldDouble = !shouldDouble;
            return numDigit;
        })
        .reduce((prev, current): number => prev + current);

    return total % 10 === 0;
};

export const validateExpirationDate = (value: string): boolean => {
    const dateValues = value.split('/');
    const month = parseInt(dateValues[0]) - 1;
    const year = parseInt(dateValues[1]);

    if (Number.isNaN(month) || Number.isNaN(year) || month > 11 || new Date() > new Date(year, month + 1, 0))
        return false;

    return true;
};

export const validateCVV = (value: string): boolean => value.replace(/\D/g, '').length === 3;

export default (formData: any, validationRules: Record<string, Function[]>): Record<string, any> => {
    const result: Record<string, any> = {
        isValid: true,
        errorMsgs: {},
    };

    Object.keys(formData).forEach((key): void => {
        const isValid = validationRules[key]
            ? validationRules[key].every((validator): boolean => validator(formData[key]))
            : true;

        if (!isValid) {
            result.isValid = false;
            result.errorMsgs[key] = `Campo inválido. Tente novamente`;
        }
    });

    return result;
};
