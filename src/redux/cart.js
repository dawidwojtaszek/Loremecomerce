import { createSlice } from '@reduxjs/toolkit'

const addItemToCart = (currentList, itemToAdd) => {
    const existingItem = currentList.find(item => item.id === itemToAdd.id);

    if (existingItem) {
        return currentList.map(item => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    } else {
        return [...currentList, { ...itemToAdd, quantity: 1 }]
    }
}
const reduceQuantity = (itemToReduce, currentItems) => {
    const existingCartItem = currentItems.find(item => item.id === itemToReduce.id);

    if (existingCartItem.quantity === 1) {
        return currentItems.filter(item => item.id !== itemToReduce.id)
    }
    return currentItems.map(item => item.id === itemToReduce.id ? { ...item, quantity: item.quantity - 1 } : { ...item })


}


const initialState = {
    hidden: true,
    items: [],

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.hidden = !state.hidden
        },
        addItem: (state, action) => {
            state.items = addItemToCart(state.items, action.payload)
        },
        reduceItem: (state, action) => {
            state.items = reduceQuantity(action.payload, state.items)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => { return item.id !== action.payload.id })
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleCart, addItem, reduceItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer