import { AnyAction } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { signOut } from './auth-actions';
import firebase from '../services/firebase';
import firebaseCloudFunctionService from '../services/firebase-cloud-function-service';
import { Company, Credentials } from '../types';

export enum UserActionTypes {
    COMPANY_FETCH = 'COMPANY_FETCH',
    ON_USER_CREATE_REQUEST = 'ON_USER_CREATE_REQUEST',
    ON_USER_CREATE_SUCCEED = 'ON_USER_CREATE_SUCCEED',
    ON_USER_CREATE_FAIL = 'ON_USER_CREATE_FAIL',
    RESET_SIGNUP_ERRORS = 'RESET_SIGNUP_ERRORS',
}

export const createUser = (credentials: Credentials, company: Company): ThunkAction<unknown, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({
            type: UserActionTypes.ON_USER_CREATE_REQUEST,
        });
        try {
            await firebaseCloudFunctionService.signup(credentials, company);
            dispatch({
                type: UserActionTypes.ON_USER_CREATE_SUCCEED,
            });
            dispatch(signOut());
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
