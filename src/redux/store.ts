import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

const localState: string | null = window.localStorage.getItem('localState');
const initialState: any = localState ? JSON.parse(localState) : {};

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.subscribe(() => {
  window.localStorage.setItem('localState', JSON.stringify(store.getState()));
});