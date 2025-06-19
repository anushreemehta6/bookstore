import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function About() {
  return (
    
    <>
    <Navbar/>
    <div className=" max-w-screen-2xl mx-auto md:px-20 px-4 min-h-screen flex ">
        <div className="img hidden md:block "><img className='border-4 border-[#e8bad0] p-4 rounded-full m-12  ' src="/src/assets/creator.jpg" alt="" width={400} height={400}/></div>
        <div className="text">
            <div className="border-2 border-[#e8bad0] max-w-3xl mx-auto m-4 md:m-8 rounded-md p-4 md:p-6 text-base md:text-lg">
  <p>
    Love Between Pages is a community space for book lovers, where stories come alive beyond the written word. Whether you're a fan of timeless classics, modern romances, or heartwarming tales, this site helps you connect with fellow readers, explore book recommendations, and share your passion for reading.
    <br /><br />
    Our mission is to build a welcoming space where everyone — from casual readers to lifelong bibliophiles — can celebrate the love of books and storytelling.
    <br /><br />
    Join us and discover how a shared love for pages can bring people together! 📚💖
  </p>
</div>

<div className="border-2 border-[#e8bad0] max-w-3xl mx-auto m-4 md:m-8 rounded-md p-4 md:p-6 text-base md:text-lg">
  <p>
    I’m Anushree Mehta, a passionate front-end developer and DevRel at Fluxor, blending technology with community. I love building intuitive web experiences, exploring Web3, and empowering developers through content, talks, and collaboration. Always learning, always sharing — on a mission to make tech more accessible and exciting for everyone.
  </p>
</div>

        </div>

        <div className="links">

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About