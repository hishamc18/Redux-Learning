import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const todoSlice = createSlice({
    name: "todoList",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state, action) =>{
            state.todo.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter((_,index) => index !== action.payload)
        },
        editTodo: (state, action) => {
            const {index, newText} = action.payload;
            state.todo[index] = newText
        }
    }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer