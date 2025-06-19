import React from 'react'
import { useState , useEffect} from 'react'
import wishIcon from '../assets/wish.svg'; 
import Login from './Login';

function Navbar() {
 
 


  return (
    

    <>

      <div className={`max-w-screen-2xl mx-auto md:px-20 px-4  `}  >
        <div className= {`navbar bg-base-100  shadow-[#e8bad0]    `}>
          <div className="navbar-start">
           
            <a href='/' className="btn btn-ghost text-xl bg-[#e8bad0] text-black">Love Between Pages</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href='/'>Home</a></li>
              <li><a href='/books'>Books</a></li>
              <li><a href='/contact'> Contact</a></li>
              <li><a href='/about'>About</a></li>
            </ul>
          </div>

          <div className="navbar-end gap-5">
            <input type="text" placeholder="Search" className= {`input input-bordered w-24 md:w-auto hidden md:block  ` }/>
                
                <button className='cursor-pointer'><img src={wishIcon} alt="wishlist" width={30} height={30} /></button>
            <a className="btn bg-[#e8bad0] text-black"  onClick={()=>document.getElementById('my_modal_3').showModal()} >Login</a> 
            <Login/>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Navbar