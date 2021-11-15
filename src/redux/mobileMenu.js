import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    hidden: true,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.hidden = !state.hidden
        },

    },
})

// Action creators are generated for each case reducer function
export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer
