import React from 'react'
import 'flowbite/dist/flowbite.css';

import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashaboard from './pages/Dashaboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/about'
import Header from './components/header'

export default function App() {
  return (
    <BrowserRouter> 
    <Header/>
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
