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

    if (month < 1) return false;

    if (Number.isNaN(month) || Number.isNaN(year) || month > 11 || new Date() > new Date(year, month + 1, 0))
        return false;

    return true;
};

export const validateCVV = (value: string): boolean => value.replace(/\D/g, '').length === 3;

export const validateCNPJ = (value: string): boolean => {
    const isPatternValid = /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/.test(value);

    if (!isPatternValid) return false;

    const parsedValue = value.replace(/\D/g, '');

    for (let i = 0; i < 10; i++) {
        if (parsedValue === `${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`) {
            return false;
        }
    }

    let valueWithoutDVsize = parsedValue.length - 2;
    let valueWithoutDV = parsedValue.substr(0, valueWithoutDVsize);
    const dv = parsedValue.substring(valueWithoutDVsize);

    let sum = 0;
    let pos = valueWithoutDVsize - 7;

    for (let i = valueWithoutDVsize; i >= 1; i--) {
        sum += parseInt(valueWithoutDV.charAt(valueWithoutDVsize - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result !== parseInt(dv.charAt(0))) return false;

    valueWithoutDVsize = valueWithoutDVsize + 1;
    valueWithoutDV = parsedValue.substring(0, valueWithoutDVsize);
    sum = 0;
    pos = valueWithoutDVsize - 7;

    for (let i = valueWithoutDVsize; i >= 1; i--) {
        sum += parseInt(valueWithoutDV.charAt(valueWithoutDVsize - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result !== parseInt(dv.charAt(1))) return false;

    return true;
};

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
