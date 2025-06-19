import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
// import '../App.css'
import Freebook from '../component/Freebook'
import Footer from '../component/Footer'

function Home() {
   return (
    <>
     <Navbar/>
     <Hero/>
     <Freebook/>
     <Footer/>
    </>
  )
}

export default Home