import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './items';
import wishlistReducer from './wishlist';
export const store = configureStore({
    reducer: {
        items: itemsReducer,
        wishlist: wishlistReducer,
    },
})