import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';  //This is used when debugging our redux code

import { persistStore } from 'redux-persist';  //It allows our browser to cache our store depending on certain configuration

import rootReducer from './root-reducer';

//The middleware store is expecting from redux is going to be an array
// const middlewares = [logger];  //we may want to modify it later thats why we have putted in a array which is used below

const middlewares = [];
if (process.env.NODE_ENV === 'development'){  //If u hover over NODE_ENV u will see that it has  3 options. So if in development mode(like in localhost) logger will be pushed to the array which will be applied to applyMiddleware fn
    middlewares.push(logger);      
}

export const store = createStore( rootReducer, applyMiddleware( ...middlewares ));  //spread operator will spread all the value that are in the logger which is in the array of middlewares

export const persistor = persistStore( store );

export default { store, persistor };