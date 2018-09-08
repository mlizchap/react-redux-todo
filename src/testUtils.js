// testUtils.js
import { createStore } from 'redux';
import reducer from './reducers';

export const storeFactory = (initialState) =>{
    return createStore(reducer, initialState);
}