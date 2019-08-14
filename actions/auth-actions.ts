import { Credentials } from '../types';
import Router from 'next/router';
import firebase from '../services/firebase';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchCompanyInfo } from './user-actions';

export enum AuthActionTypes {
    IS_LOGGED = 'IS_LOGGED',
    SIGN_OUT = 'SIGN_OUT',
    ON_LOGIN_REQUEST = 'ON_LOGIN_REQUEST',
    ON_LOGIN_SUCCEED = 'ON_LOGIN_SUCCEED',
}

export const signinUser = (credentials: Credentials): ThunkAction<unknown, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: AuthActionTypes.ON_LOGIN_REQUEST,
        });
        try {
            await firebase.signinUser(credentials);
            dispatch({
                type: AuthActionTypes.ON_LOGIN_SUCCEED,
            });
            dispatch((): Promise<boolean> => Router.push('/'));
        } catch (err) {
            throw err;
        }
    };
};

export const checkAuth = (): ThunkAction<unknown, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const user = await firebase.checkAuthentication();

            if (user) {
                dispatch({
                    type: AuthActionTypes.IS_LOGGED,
                    payload: {
                        uid: user.uid,
                        isLogged: true,
                    },
                });
                dispatch(fetchCompanyInfo(user.uid));
                return;
            }

            dispatch((): Promise<boolean> => Router.push('/signin'));
        } catch (err) {
            throw err;
        }
    };
};

export const signOut = (): ThunkAction<unknown, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            await firebase.signOut();

            dispatch({
                type: AuthActionTypes.SIGN_OUT,
            });

            dispatch((): Promise<boolean> => Router.push('/signin'));
        } catch (err) {
            throw err;
        }
    };
};
