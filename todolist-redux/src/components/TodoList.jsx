import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../slices/todoSlice";

function TodoList() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const todoItem = useSelector((state) => state.todos.todo);
    const [editId, setEditId] = useState()
    const [editText, setEditText] = useState() 

    const handleAddTodo = () => {
        dispatch(addTodo(text));
        setText("");
    };

    const handleDelete = (index) =>{
        dispatch(deleteTodo(index))
    }

    const handleEdit = (index) => {
        setEditId(index);
        setEditText(todoItem[index]) //pre fill
    }

    const handleSave = (index) =>{
        dispatch(editTodo({index, newText: editText}))
        setEditId(null)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your Todo"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button onClick={handleAddTodo}>Add</button>



            <div>
                <ul>
                    {todoItem.map((item, index) => (
                        <li key={index}>
                            {editId == index ? (
                                <>
                                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                                <button onClick={() => {handleSave(index)}}>Save</button>
                                </> 
                                ) : (
                                    <>
                                    {item}
                                    <button onClick={() => {handleEdit(index)}}>Edit</button>
                                    <button onClick={() => {handleDelete(index)}}>Delete</button>
                                    </>
                            )}
                            </li>
                    ))}
                            
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
