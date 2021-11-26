import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'

import itemsReducer from './items';
import wishlistReducer from './wishlist';
import modalReducer from './modal';
import menuReducer from './mobileMenu';
import cartReducer from './cart';
import blogReducer from './blog';

const reducers = combineReducers(
    {
        items: itemsReducer,
        wishlist: wishlistReducer,
        modal: modalReducer,
        menu: menuReducer,
        cart: cartReducer,
        blog: blogReducer
    }
)

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
})

// export const store = configureStore({
//     reducer: {
//         items: itemsReducer,
//         wishlist: wishlistReducer,
//         modal: modalReducer,
//         menu: menuReducer,
//         cart: cartReducer,
//     },
// })