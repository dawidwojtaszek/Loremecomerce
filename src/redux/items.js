import { createSlice } from '@reduxjs/toolkit'

const filterBestseller = (category, itemsList) => {
    const filterList = itemsList.filter(item => (item.category === category));
    return filterList;
}


const initialState = {
    items: [],
    bestsellers: [],
    currentBestseller: [],
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
        },
        setCurrentBestseller: (state, action) => {
            state.currentBestseller = action.payload
        },
        filterCategory: (state, action) => {
            state.currentBestseller = filterBestseller(action.payload, state.bestsellers)
        }
    },
})

// Action creators are generated for each case reducer function
export const { setItemsList, setBestsellers, setCurrentBestseller, filterCategory } = itemsSlice.actions;

export default itemsSlice.reducer

