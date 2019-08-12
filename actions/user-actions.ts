import { Company, Credentials } from '../types';
import Router from 'next/router';
import firebase from '../services/firebase';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export enum UserActionTypes {
    COMPANY_FETCH = 'COMPANY_FETCH',
}

export const createCompany = (credentials: Credentials, company: Company): ThunkAction<unknown, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            await firebase.createCompany(credentials, company);
            dispatch((): Promise<boolean> => Router.push('/'));
        } catch (err) {
            throw err;
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
