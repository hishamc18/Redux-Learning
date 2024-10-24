import { configureStore } from '@reduxjs/toolkit'
import demoReducer from '../slice/slice'

export const store = configureStore({
    reducer: {
        demoTask: demoReducer
    }
})