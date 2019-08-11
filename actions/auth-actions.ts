import { Company, Credentials } from '../types';
import Router from 'next/router';
import firebase from '../services/firebase';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ActionTypes } from './action-types';

export const createCompany = (credentials: Credentials, company: Company): Function => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const data: Company = await firebase.createCompany(credentials, company);
            dispatch({
                type: ActionTypes.USER_CREATED,
                payload: data,
            });
            dispatch((): Promise<boolean> => Router.push('/'));
        } catch (err) {
            throw err;
        }
    };
};

export const signinUser = (credentials: Credentials): Function => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const userCredentials = await firebase.signinUser(credentials);
            console.log(userCredentials);
            dispatch((): Promise<boolean> => Router.push('/'));
        } catch (err) {
            throw err;
        }
    };
};
