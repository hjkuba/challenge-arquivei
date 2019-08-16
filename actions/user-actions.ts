import { Company, Credentials } from '../types';
import Router from 'next/router';
import firebase from '../services/firebase';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export enum UserActionTypes {
    COMPANY_FETCH = 'COMPANY_FETCH',
    ON_USER_CREATE_REQUEST = 'ON_USER_CREATE_REQUEST',
    ON_USER_CREATE_SUCCEED = 'ON_USER_CREATE_SUCCEED',
    ON_USER_CREATE_FAIL = 'ON_USER_CREATE_FAIL',
    RESET_SIGNUP_ERRORS = 'RESET_SIGNUP_ERRORS',
}

export const createCompany = (credentials: Credentials, company: Company): ThunkAction<unknown, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: UserActionTypes.ON_USER_CREATE_REQUEST,
        });
        try {
            await firebase.createCompany(credentials, company);
            dispatch({
                type: UserActionTypes.ON_USER_CREATE_SUCCEED,
            });
            dispatch((): Promise<boolean> => Router.push('/'));
        } catch (err) {
            dispatch({
                type: UserActionTypes.ON_USER_CREATE_FAIL,
                payload: err.message,
            });
        }
    };
};

export const fetchCompanyInfo = (userId: string): ThunkAction<unknown, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const company: Company = await firebase.fetchCompanyInfo(userId);
            dispatch({
                type: UserActionTypes.COMPANY_FETCH,
                payload: company,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const resetSignupErrors = (): AnyAction => {
    return {
        type: UserActionTypes.RESET_SIGNUP_ERRORS,
    };
};
