import { createSlice } from '@reduxjs/toolkit'

const filterBestseller = (category, itemsList) => {
    const filterList = itemsList.filter(item => (item.category === category));
    return filterList;
}


const initialState = {
    items: [],
    bestsellers: [],
    currentBestseller: [],
    currentShop: [],
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
        },
        setCurrentShop: (state, action) => {
            state.currentShop = action.payload
        },
        filterShopCategory: (state, action) => {
            state.currentShop = state.items.filter(item => (item.category === action.payload))
        }
    },
})

// Action creators are generated for each case reducer function
export const { setItemsList, setBestsellers, setCurrentBestseller, filterCategory, setCurrentShop, filterShopCategory } = itemsSlice.actions;

export default itemsSlice.reducer

