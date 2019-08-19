import validator, {
    validateCNPJ,
    validateCVV,
    validateCreditCardPattern,
    validateExpirationDate,
    validateFilledText,
    validateLuhnAlg,
} from '../../helpers/validators';

describe('validateCNPJ', (): void => {
    it('should return "true" for a valid CNPJ', (): void => {
        expect(validateCNPJ('45.454.098/0001-95')).toBe(true);
        expect(validateCNPJ('68.844.885/0001-49')).toBe(true);
        expect(validateCNPJ('38.304.474/0001-08')).toBe(true);
    });

    it('should return "false" for an invalid CNPJ', (): void => {
        expect(validateCNPJ('')).toBe(false);
        expect(validateCNPJ('11.111.111/1111-11')).toBe(false);
        expect(validateCNPJ('35.633.978/456-66')).toBe(false);
    });
});

describe('validateCNPJ', (): void => {
    it('should return "true" for a valid CVV', (): void => {
        expect(validateCVV('455')).toBe(true);
    });

    it('should return "false" for an invalid CNPJ', (): void => {
        expect(validateCNPJ('')).toBe(false);
        expect(validateCNPJ('2134')).toBe(false);
        expect(validateCNPJ('11')).toBe(false);
    });
});

describe('validateCreditCardPattern', (): void => {
    it('should return "true" for a valid Credit Card Pattern', (): void => {
        expect(validateCreditCardPattern('4556 6533 5666 9999')).toBe(true);
    });

    it('should return "false" for an invalid Credit Card Pattern', (): void => {
        expect(validateCreditCardPattern('4556 6533 5a66 9999')).toBe(false);
        expect(validateCreditCardPattern('4556653358669999')).toBe(false);
    });
});

describe('validateExpirationDate', (): void => {
    it('should return "true" for a valid Expiration Date', (): void => {
        expect(validateExpirationDate('02/2500')).toBe(true);
    });

    it('should return "false" for an invalid Expiration Date', (): void => {
        expect(validateExpirationDate('02/2019')).toBe(false);
        expect(validateExpirationDate('13/2020')).toBe(false);
        expect(validateExpirationDate('00/2020')).toBe(false);
    });
});

describe('validateFilledText', (): void => {
    it('should return "true" for an non-empty text', (): void => {
        expect(validateFilledText('hello')).toBe(true);
    });

    it('should return "false" for an empty text', (): void => {
        expect(validateFilledText('')).toBe(false);
    });
});

describe('validateLuhnAlg', (): void => {
    it('should return "true" for an valid Credit Card Number', (): void => {
        expect(validateLuhnAlg('5522266241308241')).toBe(true);
    });

    it('should return "false" for an invalid Credit Card Number', (): void => {
        expect(validateLuhnAlg('6532156132513216')).toBe(false);
    });
});

describe('validator', (): void => {
    const formData = {
        creditCard: '5522 2662 4130 8241',
        cnpj: '45.454.098/0001-95',
    };

    const validationRules = {
        creditCard: [validateCreditCardPattern, validateLuhnAlg],
        cnpj: [validateCNPJ],
    };

    it('should generate a positive validation result', (): void => {
        expect(validator(formData, validationRules)).toEqual({
            isValid: true,
            errorMsgs: {},
        });
    });

    it('should generate a negative validation result', (): void => {
        formData.creditCard = '5222 2662 4133 8056';

        expect(validator(formData, validationRules)).toEqual({
            isValid: false,
            errorMsgs: {
                creditCard: 'Campo inválido. Tente novamente',
            },
        });
    });
});
