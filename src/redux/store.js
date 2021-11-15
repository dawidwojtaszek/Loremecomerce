import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './items';
import wishlistReducer from './wishlist';
import modalReducer from './modal';
import menuReducer from './mobileMenu';

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        wishlist: wishlistReducer,
        modal: modalReducer,
        menu: menuReducer,
    },
})