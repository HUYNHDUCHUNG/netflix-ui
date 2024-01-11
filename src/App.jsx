import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import NetFlix from './pages/Netflix'
import Player from './pages/Player'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/' element={<NetFlix />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
