import { AnyAction } from 'redux';
import { AuthActionTypes } from '../actions/auth-actions';

export interface AuthState {
    isLogged: boolean;
}

const initialState: AuthState = {
    isLogged: false,
};

export default function(state = initialState, action: AnyAction): AuthState {
    switch (action.type) {
        case AuthActionTypes.IS_LOGGED:
            return { ...state, isLogged: action.payload };
        case AuthActionTypes.SIGN_OUT:
            return { ...state, isLogged: false };
        default:
            return state;
    }
}
