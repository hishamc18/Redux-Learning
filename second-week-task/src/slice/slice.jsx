import { createSlice } from "@reduxjs/toolkit";

const demoSlice = createSlice({
    name: "demo",
    initialState: {
        firstNumber: 0,
        secondNumber: 0
    },
    reducers: {
        setFirstNumber: (state, action) =>{
            state.firstNumber = action.payload
        },
        setSecondNumber: (state, action) =>{
            state.secondNumber = action.payload
        }
    }
})


export const { setFirstNumber, setSecondNumber } = demoSlice.actions
export default demoSlice.reducer