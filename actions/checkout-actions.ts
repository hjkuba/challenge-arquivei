import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import firebase from '../services/firebase';
import Router from 'next/router';
import { PurchaseActionTypes } from './purchase-actions';

export enum CheckoutActionTypes {
    TO_DASHBOARD = 'TO_DASHBOARD',
    ON_PAYMENT_REQUEST = 'ON_PAYMENT_REQUEST',
    ON_PAYMENT_SUCCEED = 'ON_PAYMENT_SUCCEED',
    ON_PAYMENT_ERROR = 'ON_PAYMENT_ERROR',
    RESET_CHECKOUT_ERRORS = 'RESET_CHECKOUT_ERRORS',
}

export const buyQueries = (uid: string, queries: number, data: any): ThunkAction<unknown, {}, {}, AnyAction> => {
    console.log('Simulate checkout with form data: ', data);

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: CheckoutActionTypes.ON_PAYMENT_REQUEST,
        });
        try {
            await firebase.insertQueries(uid, queries);
            dispatch({
                type: PurchaseActionTypes.RESET_QUERIES,
            });
            dispatch({
                type: CheckoutActionTypes.ON_PAYMENT_SUCCEED,
            });
        } catch (err) {
            dispatch({
                type: CheckoutActionTypes.ON_PAYMENT_ERROR,
                payload: err.message,
            });
        }
    };
};

export const backToDashboard = (): ThunkAction<unknown, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
        dispatch({
            type: CheckoutActionTypes.TO_DASHBOARD,
            payload: false,
        });

        Router.push('/');
    };
};

export const resetCheckoutErrors = (): AnyAction => {
    return {
        type: CheckoutActionTypes.RESET_CHECKOUT_ERRORS,
    };
};
