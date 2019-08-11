import { combineReducers, Reducer, AnyAction } from 'redux';
import userReducer, { UserState } from './user-reducer';

export interface StoreState {
    user: UserState;
}

const appReducer: Reducer<StoreState, AnyAction> = combineReducers<StoreState>({
    user: userReducer,
});

export default appReducer;
