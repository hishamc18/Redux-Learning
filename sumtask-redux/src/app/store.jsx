import { configureStore } from "@reduxjs/toolkit"
import sumReducer from "../features/SumSLice"

export const store = configureStore({
    reducer: {
        sumtask: sumReducer
    }
})