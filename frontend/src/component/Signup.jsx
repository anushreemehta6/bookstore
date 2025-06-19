import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#e8bad0] shadow-lg rounded-lg">
      <h3 className="font-semibold text-3xl text-black mb-10">SignUp</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
        {/* Name */}
        <label htmlFor="name" className="text-black">Enter Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: true })}
          className="bg-white text-black rounded-md p-2"
        />

        {/* Email */}
        <label htmlFor="email" className="text-black">Enter your Email</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: true })}
          className="bg-white text-black rounded-md p-2"
        />

        {/* Password */}
        <label htmlFor="password" className="text-black">Enter Password</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: true })}
          className="bg-white text-black rounded-md p-2"
        />

        {/* Submit Button */}
        <button type="submit" className="btn btn-ghost text-xl bg-slate-900 text-white mt-4">
          SignUp
        </button> 
        
      </form>

      {/* Already registered? */}
      <div className="flex justify-around m-5 items-center">
        <span className="flex gap-2 text-xl text-black">
          <p>Already registered?</p>
          <Link to="/" className="underline text-pink-600">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
