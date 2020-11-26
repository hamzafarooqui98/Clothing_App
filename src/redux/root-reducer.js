import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  //This will get us the original window localstorage on our window browser 

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const  persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({ 
    user : userReducer,
    cart : cartReducer
});

export default persistReducer( persistConfig, rootReducer );