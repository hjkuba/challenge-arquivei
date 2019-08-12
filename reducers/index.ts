import { combineReducers, Reducer, AnyAction } from 'redux';
import userReducer, { UserState } from './user-reducer';
import authReducer, { AuthState } from './auth-reducer';
import purchaseReducer, { PurchaseState } from './purchase-reducer';
import checkoutReducer, { CheckoutState } from './checkout-reducer';

export interface StoreState {
    auth: AuthState;
    user: UserState;
    purchase: PurchaseState;
    checkout: CheckoutState;
}

const appReducer: Reducer<StoreState, AnyAction> = combineReducers<StoreState>({
    user: userReducer,
    auth: authReducer,
    purchase: purchaseReducer,
    checkout: checkoutReducer,
});

export default appReducer;
