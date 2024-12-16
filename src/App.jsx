import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import MainLayout from './Layouts/MainLayout'
import AuthLayout from './Layouts/AuthLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route index element = {<MainLayout><Home /></MainLayout>}></Route>
        <Route path='/register' element = {<AuthLayout><Register /></AuthLayout>}></Route>
        <Route path='/login' element = {<AuthLayout><Login /></AuthLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App
