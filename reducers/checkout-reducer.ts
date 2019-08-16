import { AnyAction } from 'redux';
import { CheckoutActionTypes } from '../actions/checkout-actions';

export interface CheckoutState {
    activeConfirmationView: boolean;
    isWaitingPayment: boolean;
    checkoutErrorMsg: string;
}

const initialState: CheckoutState = {
    activeConfirmationView: false,
    isWaitingPayment: false,
    checkoutErrorMsg: '',
};

export default function(state = initialState, action: AnyAction): CheckoutState {
    switch (action.type) {
        case CheckoutActionTypes.ON_PAYMENT_REQUEST:
            return { ...state, isWaitingPayment: true, checkoutErrorMsg: '' };
        case CheckoutActionTypes.ON_PAYMENT_SUCCEED:
            return { ...state, isWaitingPayment: false, activeConfirmationView: true };
        case CheckoutActionTypes.ON_PAYMENT_ERROR:
            return { ...state, isWaitingPayment: false, checkoutErrorMsg: action.payload };
        case CheckoutActionTypes.TO_DASHBOARD:
            return { ...state, activeConfirmationView: action.payload };
        default:
            return state;
    }
}
