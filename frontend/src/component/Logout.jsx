import React from 'react'
import { useAuth } from "../context/AuthProvider";
import toast from 'react-hot-toast';
function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleuser=()=>{
        try {
            setAuthUser(
                {
                    ...authUser,
                    user:null
                }
            )
            localStorage.removeItem("Users")
            toast.success("Logout Successfull")
            window.location.reload()
        } catch (error) {
            toast.error("could not LogOut")
        }
    }
  return (
    <div  className="navbar-end gap-5">
        <button onClick={handleuser}  className="btn btn-ghost text-xl bg-[#e8bad0] text-black">Logout</button>
    </div>
  )
}

export default Logout