import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        console.log(data);


    };
    return (
        <>
            <Navbar />

            <div className={`hero   mx-auto md:px-20 px-4 min-h-screen `}>
                <div className="hero-content flex gap-25 align-middle " >

                    <div >
                        <h1 className="text-2xl md:text-5xl font-semibold text-[#e8bad0]">Get in Touch with Us 💖</h1>
                        <p className='mt-12 text-xl'>We’d love to hear from you! Whether you have a question about our services, want to give feedback, or simply want to say hello — feel free to reach out.
Our team will get back to you as soon as possible.

</p>
                        <div className="w-xl mx-auto mt-10 p-6 bg-[#e8bad0] shadow-lg rounded-lg">


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

                                <label htmlFor="" className="text-black">Message</label>
                                <input type="text" name="" id="message"   className="bg-white text-black rounded-md p-2" {...register('message', { required: true })}/>



                                {/* Submit Button */}
                                <button type="submit" className="btn btn-ghost text-xl bg-slate-900 text-white mt-4">
                                    Send
                                </button>
                                <p className='text-slate-900 text-center'>We respect your privacy — your information will never be shared.</p>

                            </form>

                        </div>

                    </div>
                   

                </div>
            </div>



            <Footer />
        </>
    )
}

export default Contact