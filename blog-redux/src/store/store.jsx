import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../slices/BlogSlice'


export const store = configureStore({
    reducer: {
        blog: blogReducer
    }
})