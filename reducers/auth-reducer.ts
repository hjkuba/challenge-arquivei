import { AnyAction } from 'redux';
import { AuthActionTypes } from '../actions/auth-actions';

export interface AuthState {
    isLogged: boolean;
    isWaitingSignin: boolean;
    signinErrorMsg: string;
    uid: string | null;
}

const initialState: AuthState = {
    isLogged: false,
    isWaitingSignin: false,
    signinErrorMsg: '',
    uid: null,
};

export default function(state = initialState, action: AnyAction): AuthState {
    switch (action.type) {
        case AuthActionTypes.IS_LOGGED:
            const { isLogged, uid } = action.payload;
            return { ...state, isLogged, uid };
        case AuthActionTypes.SIGN_OUT:
            return { ...state, isLogged: false };
        case AuthActionTypes.ON_LOGIN_REQUEST:
            return { ...state, isWaitingSignin: true, signinErrorMsg: '' };
        case AuthActionTypes.ON_LOGIN_SUCCEED:
            return { ...state, isWaitingSignin: false };
        case AuthActionTypes.ON_LOGIN_ERROR:
            return { ...state, isWaitingSignin: false, signinErrorMsg: action.payload };
        case AuthActionTypes.RESET_SIGNIN_ERRORS:
            return { ...state, signinErrorMsg: '' };
        default:
            return state;
    }
}
