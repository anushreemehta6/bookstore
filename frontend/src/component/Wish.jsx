import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Wish() {
  return (
    <>
    <Navbar/>
    <div className="mt-18 items-center justify-center text-center  max-w-screen-2xl  mx-auto md:px-20 px-4">
   <h1 className="text-3xl font-bold mb-4 text-center">Your Wishlist 💖</h1>
   <p class="text-center text-white-600 mb-8">  Here's a list of books you love — saved just for you!  
  Add them to your cart whenever you're ready to dive in.</p>
    </div>

    <div className="book">
        
    </div>

    <Footer/>
    </>
  )
}

export default Wish