import { createSlice } from '@reduxjs/toolkit'

const addItem = (currentList, itemToAdd) => {

    const existingItem = currentList.filter((item) => { return item.id === itemToAdd.id });
    if (existingItem.length > 0) {
        const list = currentList.filter(item => item.id !== itemToAdd.id)
        return list;

    }
    else {
        const list = currentList;
        list.push(itemToAdd);
        return list;
    }

}

const removeItemFromWishlist = (currentList, itemToRemoveId) => {
    const newList = currentList.filter(item => { return item.id !== itemToRemoveId })
    return newList
}

const initialState = {
    items: [],
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItemToWishlist: (state, action) => {
            state.items = addItem(state.items, action.payload)
        },
        clearAll: (state) => {
            state.items = []
        },
        removeItem: (state, action) => {
            state.items = removeItemFromWishlist(state.items, action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItemToWishlist, clearAll, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;