import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Netflix from './pages/Netflix'

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/sigup' element={<SignUp />} />
        <Route exact path='/' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
