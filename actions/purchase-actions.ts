import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import firebase from '../services/firebase';
import { Promotion, Company } from '../types';
import { generateQueryPriceMap, toNumber, calculateTotalPrice } from '../helpers/purchase-price';

export enum PurchaseActionTypes {
    QUERY_QTD_CHANGE = 'QUERY_QTD_CHANGE',
    PROMOTION_FETCH = 'PROMOTION_FETCH',
    QUERIES_PURCHASED = 'QUERIES_PURCHASED',
    RESET_QUERIES = 'RESET_QUERIES',
}

export const changeQueryInput = (inputValue: string, company: Company, promotion: Promotion): AnyAction => {
    const numberValue = toNumber(inputValue);
    const queryPriceMap = generateQueryPriceMap(
        numberValue,
        company.totalQueries,
        promotion['promotional-values'],
        promotion['default-value'],
    );

    const totalValue = calculateTotalPrice(queryPriceMap);

    return {
        type: PurchaseActionTypes.QUERY_QTD_CHANGE,
        payload: {
            numberValue,
            queryPriceMap,
            totalValue,
        },
    };
};

export const fetchPromotion = (): ThunkAction<unknown, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const promotion: Promotion = await firebase.fetchPromotion();
            dispatch({
                type: PurchaseActionTypes.PROMOTION_FETCH,
                payload: promotion,
            });
        } catch (err) {
            throw err;
        }
    };
};
