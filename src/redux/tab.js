import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    currentTab: 'description',

}

export const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        toggleTab: (state, action) => {
            state.currentTab = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { toggleTab } = tabSlice.actions;

export default tabSlice.reducer

