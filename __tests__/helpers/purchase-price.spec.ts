import {
    calculateTotalPrice,
    generateQueryPriceMap,
    roundFloatTo,
    toBRL,
    toNumber,
} from '../../helpers/purchase-price';
import { QueryPricing } from '../../types';

const queryList: QueryPricing[] = [
    {
        quantity: 1000,
        unitPrice: 0.09,
        totalPrice: 90,
    },
    {
        quantity: 1000,
        unitPrice: 0.16,
        totalPrice: 160,
    },
    {
        quantity: 1000,
        unitPrice: 0.24,
        totalPrice: 240,
    },
];

describe('calculateTotalPrice', (): void => {
    it('should calculate the total price from the query list', (): void => {
        expect(calculateTotalPrice(queryList)).toBe(490);
    });
});

describe('generateQueryPriceMap', (): void => {
    it('should generate a correct query price map', (): void => {
        expect(
            generateQueryPriceMap(
                1101,
                900,
                {
                    '1000': 0.09,
                    '2000': 0.16,
                },
                0.24,
            ),
        ).toEqual([
            {
                quantity: 100,
                unitPrice: 0.09,
                totalPrice: 9,
            },
            {
                quantity: 1000,
                unitPrice: 0.16,
                totalPrice: 160,
            },
            {
                quantity: 1,
                unitPrice: 0.24,
                totalPrice: 0.24,
            },
        ]);
    });
});

describe('roundFloatTo', (): void => {
    it('should round number to the decimal points passed as parameter', (): void => {
        expect(roundFloatTo(24.35623, 2)).toBe(24.36);
        expect(roundFloatTo(22, 2)).toBe(22.0);
    });
});

describe('toBRL', (): void => {
    it('should return a string with the value and the currency', (): void => {
        expect(toBRL(35.5)).toBe('R$35,50');
        expect(toBRL(100)).toBe('R$100,00');
    });
});

describe('toNumber', (): void => {
    it('should return a parsed number', (): void => {
        expect(toNumber('3500')).toBe(3500);
        expect(typeof toNumber('3500')).toBe('number');
    });

    it('should return 0 when invalid number is passed as parameter', (): void => {
        expect(toNumber('Helllo')).toBe(0);
    });
});
