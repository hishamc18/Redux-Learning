import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blog",
    initialState : {
        blog: []
    },
    reducers : {
        addBlogItem : (state, action) => {
            state.blog.push(action.payload)
        }
    }
})

export const { addBlogItem } = blogSlice.actions
export default blogSlice.reducer