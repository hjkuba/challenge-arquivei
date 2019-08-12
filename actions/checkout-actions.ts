import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import firebase from '../services/firebase';
import Router from 'next/router';

export enum CheckoutActionTypes {
    QUERIES_BOUGHT = 'QUERIES_PURCHASED',
    TO_DASHBOARD = 'TO_DASHBOARD',
}

export const buyQueries = (uid: string, queries: number, data: any): ThunkAction<unknown, {}, {}, AnyAction> => {
    console.log('Simulate checkout with form data: ', data);

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            await firebase.insertQueries(uid, queries);
            dispatch({
                type: CheckoutActionTypes.QUERIES_BOUGHT,
                payload: true,
            });
        } catch (err) {
            throw err;
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
