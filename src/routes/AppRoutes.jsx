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
import AcquirePage from '../pages/Acquire'
import CreatePage from '../pages/Create'
import CheckoutPage from '../pages/Checkout'
import AgentPage from '../pages/Agent'
import AuidiencePage from '../pages/Auidience'
import ActivatePage from '../pages/Activate'
import IdentityPage from '../pages/Identity'
import IndustriesPage from '../pages/IndustriesPage'
import LetsConnect from '../pages/LetsConnect'
import TestPage from '../pages/TestPage'

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
      <Route path='/acquire-page' element={<AcquirePage />} />
      <Route path='/create-page' element={<CreatePage />} />
      <Route path='/checkout-page' element={<CheckoutPage />} />
      <Route path='/agent-page' element={<AgentPage />} />
      <Route path='/auidience-page' element={<AuidiencePage />} />
      <Route path='/activate-page' element={<ActivatePage />} />
      <Route path='/identity-page' element={<IdentityPage />} />
      <Route path='/industries' element={<IndustriesPage />} />
      <Route path='/lets-connect' element={<LetsConnect />} />
      <Route path='/test-page' element={<TestPage />} />
      {/* <Route path='/connect' element={<Connect />} /> */}
    </Routes>
  )
}

export default AppRoutes
