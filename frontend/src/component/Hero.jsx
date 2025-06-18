import React from 'react'

function hero() {
    return (
        <>
          
            <div className="hero  max-w-screen-2xl mx-auto md:px-20 px-4 min-h-screen">
                <div className="hero-content flex " >

                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold">Fall in Love with Reading Again</h1>
                        <p className="py-6 text-sm md:text-xl">
                            Discover thousands of books at your fingertips — from global bestsellers to hidden literary gems. Explore new stories, timeless classics, and curated collections — all in one beautifully designed bookstore app.
                        </p>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="Enter Email to login" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                        <button className="btn bg-[#e8bad0] text-black mx-5">Get Started</button>
                    </div>
                    <div>  <img
                        src="/src/assets/image.png"
                        className="max-w-lg   hidden md:block rounded-lg shadow-2xl "
                    /></div>

                </div>
            </div>
        </>
    )
}

export default hero