import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route index element = {<Home></Home>}></Route>
        <Route path='/register' element = {<Register></Register>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
