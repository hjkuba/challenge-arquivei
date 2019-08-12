import { combineReducers, Reducer, AnyAction } from 'redux';
import userReducer, { UserState } from './user-reducer';
import authReducer, { AuthState } from './auth-reducer';
import purchaseReducer, { PurchaseState } from './purchase-reducer';

export interface StoreState {
    auth: AuthState;
    user: UserState;
    purchase: PurchaseState;
}

const appReducer: Reducer<StoreState, AnyAction> = combineReducers<StoreState>({
    user: userReducer,
    auth: authReducer,
    purchase: purchaseReducer,
});

export default appReducer;
