import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(logger));
    return store;
}

export default configureStore;