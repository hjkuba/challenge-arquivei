import { QueryPricing } from '../types';

export const toBRL = (value: number): string => {
    return `R$${value.toFixed(2).replace('.', ',')}`;
};

export const toNumber = (value: string | number): number => {
    const number = typeof value === 'string' ? parseInt(value) : value;
    return Number.isNaN(number) ? 0 : number;
};

export const roundFloatTo = (value: number, decimalPlaces: number): number => {
    return parseFloat(value.toFixed(decimalPlaces));
};

export const calculateTotalPrice = (queryPriceMap: QueryPricing[]): number => {
    if (!queryPriceMap.length) return 0;

    return queryPriceMap
        .map((queryPrice): number => queryPrice.totalPrice)
        .reduce((prev, current): number => prev + current);
};

export const generateQueryPriceMap = (
    currentQueries: number,
    previousQueries: number,
    promotionMap: Record<string, number>,
    defaultValue: number,
): QueryPricing[] => {
    const queryPriceMap: QueryPricing[] = [];
    let previousLimit = 0;

    if (currentQueries === 0) return queryPriceMap;

    Object.keys(promotionMap).forEach((limit): void => {
        const queryPrice: QueryPricing = {
            quantity: 0,
            unitPrice: promotionMap[limit],
            totalPrice: 0,
        };

        const currentLimit = toNumber(limit) - previousLimit;

        if (previousQueries + currentQueries > currentLimit) {
            const queriesAux = currentLimit - previousQueries;

            if (queriesAux < 0) {
                previousQueries = previousQueries - currentLimit;
                previousLimit = currentLimit;
                return;
            }

            currentQueries -= queriesAux;
            previousQueries = 0;
            queryPrice.quantity = queriesAux;
        } else {
            queryPrice.quantity = currentQueries;
            currentQueries = 0;
        }

        if (queryPrice.quantity) {
            queryPrice.totalPrice = roundFloatTo(queryPrice.quantity * queryPrice.unitPrice, 2);
            queryPriceMap.push(queryPrice);
        }

        previousLimit = currentLimit;
    });

    if (currentQueries) {
        queryPriceMap.push({
            unitPrice: defaultValue,
            quantity: currentQueries,
            totalPrice: roundFloatTo(defaultValue * currentQueries, 2),
        });
    }

    return queryPriceMap;
};
