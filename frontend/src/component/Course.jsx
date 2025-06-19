import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import axios from "axios"
import { useState , useEffect } from 'react'

function Course() {
   const [book, setbook] = useState([])
   useEffect(() => {
     const getBook=async ()=>{
      try {
      const res = await axios.get("http://localhost:4001/book")
        console.log( res.data)
        setbook(res.data)
      } catch (error) {
        console.log(error)
      }
      
     }
   
    getBook();
   }, [])
   
   

  return (
    <>
    <Navbar/>
        <div className="mt-18 items-center justify-center text-center  max-w-screen-2xl  mx-auto md:px-20 px-4 ">
          <h1 className="text-2xl md:text-4xl">
            Welcome to 
            <span className="text-[#e8bad0]"> love between pages 💖</span>
          </h1>
          <p className="mt-12">
             Discover stories you'll fall in love with. Read books for free, explore new genres, 
    and bring home your next favorite read. Whether you’re here to unwind with a good book 
    or build your personal library — you’re in the right place. Happy reading! 
          </p>
     <div className='flex  flex-wrap'>
          {book.map((item)=>

         ( 
          
            <div key={item.id} className=" card bg-base-100 m-5  ">
             
             <div  className=" card bg-base-100 w-96 border-2 border-[#e8bad0]">
                <figure>
                  <img src={item.img} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.desc}</p>
                    <div className="card-actions justify-end">
                        <div className=" p-2  bg-[#e8bad0] text-black text-xl rounded-md">{`₹ ${item.price}`}</div>
                       <button className=' p-2 bg-[#e8bad0] text-black text-xl rounded-md cursor-pointer'>Buy Now</button>
                        
                    </div>
                </div>
                
            </div>
            </div>
            
         )
           )}

          </div>
        </div>
 
    <Footer/>
    </>
  )
}

export default Course