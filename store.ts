import { createStore, applyMiddleware, Store, StoreEnhancerStoreCreator } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware: StoreEnhancerStoreCreator = applyMiddleware(reduxThunk)(createStore);

class StoreManager {
    public get store(): Store {
        return createStoreWithMiddleware(reducers);
    }
}

export default new StoreManager();
