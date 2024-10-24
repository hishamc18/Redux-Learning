import React, { useState } from "react";
import { addBlogItem } from "../slices/BlogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddBlog = () => {
        dispatch(addBlogItem({ title, description }));
        navigate("/");
    };

    return (
        <div className="createBlog">
            <input type="text" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Blog Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleAddBlog}>Add Blog</button>
        </div>
    );
}

export default CreateBlog;
