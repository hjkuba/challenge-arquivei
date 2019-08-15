import { AnyAction } from 'redux';
import { PurchaseActionTypes } from '../actions/purchase-actions';
import { Promotion, QueryPricing } from '../types';

export interface PurchaseState {
    currentInputQtd: number;
    totalValue: number;
    queryPriceMap: QueryPricing[];
    promotion: Promotion;
}

const initialState: PurchaseState = {
    currentInputQtd: 0,
    totalValue: 0,
    queryPriceMap: [],
    promotion: {
        'default-text': '',
        'default-value': 0,
        'promotional-texts': {},
        'promotional-values': {},
    },
};

export default function(state = initialState, action: AnyAction): PurchaseState {
    switch (action.type) {
        case PurchaseActionTypes.QUERY_QTD_CHANGE:
            const { numberValue, queryPriceMap, totalValue } = action.payload;
            return { ...state, currentInputQtd: numberValue, totalValue, queryPriceMap };
        case PurchaseActionTypes.RESET_QUERIES:
            return { ...initialState, promotion: state.promotion };
        case PurchaseActionTypes.PROMOTION_FETCH:
            return { ...state, promotion: action.payload };
        default:
            return state;
    }
}
