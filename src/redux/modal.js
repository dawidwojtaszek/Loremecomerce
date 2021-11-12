import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    hidden: true,
    currentElement: null

}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.hidden = !state.hidden
        },
        setCurrentElement: (state, action) => {
            state.currentElement = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleModal, setCurrentElement } = modalSlice.actions;

export default modalSlice.reducer

