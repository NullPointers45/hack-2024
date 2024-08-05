import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/prelogin/Home'
import Login from './components/prelogin/Login'
import Signup from './components/prelogin/Signup'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Header />
        <div className='mx-20 py-8 bg-indigo text-justify'>
          <BrowserRouter >
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App