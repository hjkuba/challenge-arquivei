import { AnyAction } from 'redux';
import { Company } from '../types';
import { ActionTypes } from '../actions/action-types';

export interface UserState {
    company: Company | null;
}

const initialState: UserState = {
    company: null,
};

export default function(state = initialState, action: AnyAction): UserState {
    switch (action.type) {
        case ActionTypes.USER_CREATED:
            return action.payload;
        default:
            return state;
    }
}
