import React from 'react'
import { useState , useEffect} from 'react'
import wishIcon from '../assets/wish.svg'; 
import Login from './Login';
import Logout from './Logout';

import { useAuth } from "../context/AuthProvider";


function Navbar() {
 
   const [authUser, setAuthUser] = useAuth();
  console.log(authUser)


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

           {authUser ? (
              <Logout />
            ) : (
              <div className="navbar-end gap-5">
                <a
                 className="btn bg-[#e8bad0] text-black text-2xl" 
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
            )}
        </div>
        <hr />
      </div>
    </>
  )
}

export default Navbar