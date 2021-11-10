import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    bestsellers: [],
}

export const itemsSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        setItemsList: (state, action) => {
            state.items = action.payload
        },
        setBestsellers: (state, action) => {
            state.bestsellers = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setItemsList, setBestsellers } = itemsSlice.actions;

export default itemsSlice.reducer

