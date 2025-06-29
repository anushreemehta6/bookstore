import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import Course from './component/Course'; 
import Signup from './component/Signup';
import Contact from './component/Contact';
import About from './component/About';
import Wish from './component/Wish';
import  { Toaster } from 'react-hot-toast';
  
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Course />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/wish" element={<Wish />} />
        
      </Routes>

      <Toaster />
    </BrowserRouter>
  )
}

export default App

