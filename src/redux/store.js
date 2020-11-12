import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';  //This is used when debugging our redux code

import rootReducer from './root-reducer';

//The middleware store is expecting from redux is going to be an array
const middlewares = [logger];  //we may want to modify it later thats why we have putted in a array which is used below

const store = createStore( rootReducer, applyMiddleware( ...middlewares ));  //spread operator will spread all the value that are in the logger which is in the array of middlewares

export default store;