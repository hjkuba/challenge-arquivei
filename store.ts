import { createStore, applyMiddleware, Store, StoreEnhancerStoreCreator } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers, { StoreState } from './reducers';

const exampleInitialState: StoreState = {
    user: {
        company: null,
    },
    auth: {
        isLogged: false,
    },
    purchase: {
        currentInputQtd: 0,
        promotion: {
            'default-text': '',
            'default-value': 0,
            'promotional-texts': {},
            'promotional-values': {},
        },
    },
};

const createStoreWithMiddleware: StoreEnhancerStoreCreator = applyMiddleware(reduxThunk)(createStore);

export function initializeStore(initialState = exampleInitialState): Store {
    return createStoreWithMiddleware(reducers, initialState);
}
