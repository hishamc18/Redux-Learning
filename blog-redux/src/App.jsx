import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import CreateBlog from './components/CreateBlog'
import BlogDetails from './components/BlogDetails'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='createBlog' element={<CreateBlog />} />
          <Route path='blog/:index' element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
