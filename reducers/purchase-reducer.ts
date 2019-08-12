import { AnyAction } from 'redux';
import { PurchaseActionTypes } from '../actions/purchase-actions';
import { Promotion } from '../types';

export interface PurchaseState {
    currentInputQtd: number | string;
    promotion: Promotion;
}

const initialState: PurchaseState = {
    currentInputQtd: 0,
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
            return { ...state, currentInputQtd: action.payload };
        case PurchaseActionTypes.PROMOTION_FETCH:
            return { ...state, promotion: action.payload };
        default:
            return state;
    }
}
