import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import Pricing from '../pages/Pricing'
import Connect from '../pages/Connect'
import Privacy from '../pages/Privacy'
import TermsOfUse from '../pages/TermsOfUse'
import Cookies from '../pages/Cookies'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/about' element={<About />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path='/terms-of-use' element={<TermsOfUse />} />
      <Route path='/cookies' element={<Cookies />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/connect' element={<Connect />} />
    </Routes>
  )
}

export default AppRoutes
