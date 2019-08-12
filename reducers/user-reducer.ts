import { AnyAction } from 'redux';
import { Company } from '../types';
import { UserActionTypes } from '../actions/user-actions';
import { AuthActionTypes } from '../actions/auth-actions';

export interface UserState {
    company: Company | null;
}

const initialState: UserState = {
    company: null,
};

export default function(state = initialState, action: AnyAction): UserState {
    switch (action.type) {
        case UserActionTypes.COMPANY_FETCH:
            return { ...state, company: action.payload };
        case AuthActionTypes.SIGN_OUT:
            return { ...state, company: null };
        default:
            return state;
    }
}
