import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Cart from './page/Cart'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Cart />} />
    </Routes>
  )
}

export default App
