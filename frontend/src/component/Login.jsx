import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';


import { useState } from 'react';
import axios from 'axios';

function Login() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()


    const onSubmit = async (data) => {
        console.log(data);

        const userInfo = {
            email: data.email,
            password: data.password
        }
    await axios.post("http://localhost:4001/user/login",userInfo)
.then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('login successfull');
        localStorage.setItem("Users",JSON.stringify(res.data))
      }
    }).catch((err)=>{
      console.log(err.message);
      toast.error('This is an error!',err);
    })

    };

    return (
        <>
            <dialog id="my_modal_3" className="modal" >
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById('my_modal_3').close()}
                        >
                            ✕
                        </button>

                        <h3 className="font-semibold text-3xl text-[#e8bad0] mb-10">Login</h3>

                        {/* Email */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email">Enter your Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: "Email is required" })}
                                className="bg-[#e8bad0] text-black rounded-md p-2"
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.password && (
                                <p className="text-pink-600">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="password">Enter Password</label>
                            <input
                                type="password"
                                id="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Minimum 8 letters"
                                    }
                                })}
                                className="bg-[#e8bad0] text-black rounded-md p-2"
                                aria-invalid={errors.password ? "true" : "false"}
                            />

                            {errors.password && (
                                <p className="text-pink-600">{errors.password.message}</p>
                            )}
                        </div>


                        {/* Submit & Link */}
                        <div className="flex justify-around m-5 items-center">
                            <button     onClick={() => document.getElementById('my_modal_3').close()}

                                type="submit"
                                className="btn btn-ghost text-xl bg-[#e8bad0] text-black"
                            >
                                Login
                            </button>

                            <span className="flex gap-2 text-xl">
                                <p>Not registered?</p>
                                <Link to="/signup" className="underline text-pink-400" >
                                    SignUp
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Login;
