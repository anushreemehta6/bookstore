import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/home';
import Course from './component/Course'; 
import Signup from './component/Signup';
import Contact from './component/Contact';
import About from './component/About';
import Wish from './component/Wish';

function App() {
  const [count, setCount] = useState(0)

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
    </BrowserRouter>
  )
}

export default App

