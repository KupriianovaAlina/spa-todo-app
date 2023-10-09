import { createStore } from 'redux';
import initialState from './initialState';
import rootReducer from './reducer';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

const store = createStore(rootReducer, { ...initialState, ...persistedState });

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;