import { createSlice } from '@reduxjs/toolkit'

const addItem = (currentList, itemToAdd) => {

    const existingItem = currentList.filter((item) => { return item === itemToAdd });
    if (existingItem.length > 0) {
        const list = currentList.filter(item => item !== itemToAdd)
        return list;

    }
    else {
        const list = currentList;
        list.push(itemToAdd);
        return list;
    }

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
    },
})

// Action creators are generated for each case reducer function
export const { addItemToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;