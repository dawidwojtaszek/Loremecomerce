import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    blogPosts: [],

}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.blogPosts = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setPosts } = blogSlice.actions;

export default blogSlice.reducer

