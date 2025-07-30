import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
     <Header />
    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/services' element={<Services /> }/>
      <Route path='/project' element={ <Project /> }/>
      <Route path='/contact' element={ <Contact /> }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
