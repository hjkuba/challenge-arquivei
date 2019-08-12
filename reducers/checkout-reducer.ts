import { AnyAction } from 'redux';
import { CheckoutActionTypes } from '../actions/checkout-actions';

export interface CheckoutState {
    activeConfirmationView: boolean;
}

const initialState: CheckoutState = {
    activeConfirmationView: false,
};

export default function(state = initialState, action: AnyAction): CheckoutState {
    switch (action.type) {
        case CheckoutActionTypes.QUERIES_BOUGHT:
            return { ...state, activeConfirmationView: action.payload };
        case CheckoutActionTypes.TO_DASHBOARD:
            return { ...state, activeConfirmationView: action.payload };
        default:
            return state;
    }
}
