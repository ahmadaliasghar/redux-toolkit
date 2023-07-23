import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: "Learn React", content: "Sample Content is here"},
    {id: '2', title: "Learn Next", content: "Sample Content is here"},
]

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:  {
        addPost(state, action) {
            state.push(action.payload)
        }
    }
})
export const showAllPosts = (state) => state.post
export const addPost = postSlice.actions.addPost
export default postSlice.reducer