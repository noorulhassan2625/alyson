import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import Pricing from '../pages/Pricing'
import Connect from '../pages/Connect'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/about' element={<About />} />
      <Route path='/connect' element={<Connect />} />
    </Routes>
  )
}

export default AppRoutes
