import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function BlogDetails() {
    const {index} = useParams()
    const blog = useSelector((state) => state.blog.blog[index])
    const navigate = useNavigate()

    if(!blog){
        return <div>No Blogs Found.....</div>
    }

  return (
    <div>
        <h2>{blog.title}</h2>
        <h5>{blog.description}</h5>
        <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default BlogDetails
