import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Shop from './pages/Shop'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductPage from './components/ProductPage'
import Blogs from './pages/Blogs'
import Blog from './components/Blog'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path="shop/:productId" element={<ProductPage />} />
          <Route path='aboutus' element={<About />} />
          <Route path='blog' element={<Blogs />} />
          <Route path='blog/:id' element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
