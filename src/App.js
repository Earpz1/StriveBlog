import React from 'react'
import NavBar from './components/navbar/BlogNavbar'
import Footer from './components/footer/Footer'
import Home from './views/home/Home'
import Blog from './views/blog/Blog'
import Cart from './views/Cart/cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
