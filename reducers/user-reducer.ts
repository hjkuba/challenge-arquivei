import { AnyAction } from 'redux';
import { Company } from '../types';
import { UserActionTypes } from '../actions/user-actions';
import { AuthActionTypes } from '../actions/auth-actions';

export interface UserState {
    company: Company | null;
    isWaitingUserCreation: boolean;
    signupErrorMsg: string;
}

const initialState: UserState = {
    company: null,
    isWaitingUserCreation: false,
    signupErrorMsg: '',
};

export default function(state = initialState, action: AnyAction): UserState {
    switch (action.type) {
        case UserActionTypes.COMPANY_FETCH:
            return { ...state, company: action.payload };
        case UserActionTypes.ON_USER_CREATE_REQUEST:
            return { ...state, isWaitingUserCreation: true, signupErrorMsg: '' };
        case UserActionTypes.ON_USER_CREATE_SUCCEED:
            return { ...state, isWaitingUserCreation: false };
        case UserActionTypes.ON_USER_CREATE_FAIL:
            return { ...state, signupErrorMsg: action.payload, isWaitingUserCreation: false };
        case AuthActionTypes.SIGN_OUT:
            return { ...state, company: null };
        default:
            return state;
    }
}
