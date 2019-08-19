import Router from 'next/router';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { PurchaseActionTypes } from './purchase-actions';
import firebaseCloudFunctionService from '../services/firebase-cloud-function-service';

export enum CheckoutActionTypes {
    TO_DASHBOARD = 'TO_DASHBOARD',
    ON_PAYMENT_REQUEST = 'ON_PAYMENT_REQUEST',
    ON_PAYMENT_SUCCEED = 'ON_PAYMENT_SUCCEED',
    ON_PAYMENT_ERROR = 'ON_PAYMENT_ERROR',
    RESET_CHECKOUT_ERRORS = 'RESET_CHECKOUT_ERRORS',
}

export const buyQueries = (uid: string, queries: number, data: any): ThunkAction<unknown, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: CheckoutActionTypes.ON_PAYMENT_REQUEST,
        });
        try {
            await firebaseCloudFunctionService.buyQueries(queries, data);
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
