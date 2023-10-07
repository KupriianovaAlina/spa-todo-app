import { createStore } from 'redux';
import initialState from './initialState';
import rootReducer from './reducer';

const store = createStore(rootReducer, initialState);

export default store;