import { createSlice } from "@reduxjs/toolkit";

export const sumSlice = createSlice({
    name: "sumOfTwo",
    initialState: {
        firstNumber: 0,
        secondNumber: 0
    },
    reducers: {
        setFirstNumber: (state, action) => {
            state.firstNumber = action.payload;
        },
        setSecondNumber: (state, action) => {
            state.secondNumber = action.payload;
        }
    }
})

export const { setFirstNumber, setSecondNumber } = sumSlice.actions;
export default sumSlice.reducer;