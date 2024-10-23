import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Home() {


    const navigate = useNavigate()
    const blog = useSelector((state) => state.blog.blog)

    const handleCreate = () =>{
        navigate('/createBlog')
    }

    const handleBlogDetails = (index) =>{
        navigate(`/blog/${index}`)
    }

  return (
    <div>
      <button onClick={handleCreate} >Create Blog</button>
      <ul>
        {blog.map((item, index) =>(
            <li onClick={() => handleBlogDetails(index)} key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
