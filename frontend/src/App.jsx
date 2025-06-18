import { useState } from 'react'
import Navbar from './component/Navbar'
import './App.css'
import Hero from './component/Hero'
import Footer from './component/Footer'
import Freebook from './component/Freebook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Freebook/>
     <Footer/>
    </>
  )
}

export default App
