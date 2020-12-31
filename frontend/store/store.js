import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    return store;
}

export default configureStore;