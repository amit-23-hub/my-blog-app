import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashaboard from './pages/Dashaboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/sign-in' element = {<Signin/>} />
      <Route path='/sign-up' element = {<Signup/>} />
      <Route path='/dashboard' element={<Dashaboard/>} />
    </Routes>
    
    </BrowserRouter>
  )
}
