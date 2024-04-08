import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Cart from './page/cart/Cart'
import NotFound from './page/notfound/NotFound'
import Checkout from './page/checkout/Checkout'
function App() {
  return (
    <Routes>
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
