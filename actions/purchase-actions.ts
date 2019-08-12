import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import firebase from '../services/firebase';
import { Promotion } from '../types';

export enum PurchaseActionTypes {
    QUERY_QTD_CHANGE = 'QUERY_QTD_CHANGE',
    PROMOTION_FETCH = 'PROMOTION_FETCH',
}

export const changeQueryInput = (inputValue: string | number): AnyAction => {
    return {
        type: PurchaseActionTypes.QUERY_QTD_CHANGE,
        payload: inputValue,
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
