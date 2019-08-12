import { AnyAction } from 'redux';
import { AuthActionTypes } from '../actions/auth-actions';

export interface AuthState {
    isLogged: boolean;
    uid: string | null;
}

const initialState: AuthState = {
    isLogged: false,
    uid: null,
};

export default function(state = initialState, action: AnyAction): AuthState {
    switch (action.type) {
        case AuthActionTypes.IS_LOGGED:
            const { isLogged, uid } = action.payload;
            return { ...state, isLogged, uid };
        case AuthActionTypes.SIGN_OUT:
            return { ...state, isLogged: false };
        default:
            return state;
    }
}
