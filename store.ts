import { createStore, applyMiddleware, Store, StoreEnhancerStoreCreator } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers, { StoreState } from './reducers';

const exampleInitialState: StoreState = {
    user: {
        company: null,
        isWaitingUserCreation: false,
        signupErrorMsg: '',
    },
    auth: {
        isLogged: false,
        isWaitingSignin: false,
        signinErrorMsg: '',
        uid: null,
    },
    purchase: {
        currentInputQtd: 0,
        totalValue: 0,
        queryPriceMap: [],
        promotion: {
            'default-text': '',
            'default-value': 0,
            'promotional-texts': {},
            'promotional-values': {},
        },
    },
    checkout: {
        activeConfirmationView: false,
        isWaitingPayment: false,
        checkoutErrorMsg: '',
    },
};

const createStoreWithMiddleware: StoreEnhancerStoreCreator = applyMiddleware(reduxThunk)(createStore);

export function initializeStore(initialState = exampleInitialState): Store {
    return createStoreWithMiddleware(reducers, initialState);
}
