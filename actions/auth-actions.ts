import Router from 'next/router';
import { AnyAction } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { fetchCompanyInfo } from './user-actions';
import { fetchPromotion } from './purchase-actions';
import firebase from '../services/firebase-service';
import { Credentials } from '../types';

export enum AuthActionTypes {
    IS_LOGGED = 'IS_LOGGED',
    SIGN_OUT = 'SIGN_OUT',
    ON_LOGIN_REQUEST = 'ON_LOGIN_REQUEST',
    ON_LOGIN_SUCCEED = 'ON_LOGIN_SUCCEED',
    ON_LOGIN_ERROR = 'ON_LOGIN_ERROR',
    RESET_SIGNIN_ERRORS = 'RESET_SIGNIN_ERRORS',
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
            dispatch({
                type: AuthActionTypes.ON_LOGIN_ERROR,
                payload: err.message,
            });
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
                dispatch(fetchPromotion());
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

export const resetSigninErrors = (): AnyAction => {
    return {
        type: AuthActionTypes.RESET_SIGNIN_ERRORS,
    };
};
