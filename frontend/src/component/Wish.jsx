import Navbar from './Navbar';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Wish() {
  const [book, setBook] = useState([]);

 const handleAddToWishlist = async (item) => {
  try {
    // Check if already in wishlist
    const existing = await axios.get(`http://localhost:4001/wishlist?id=${item.id}`);
    if (existing.data.length > 0) {
      console.log('Already in wishlist');
      return;
    }

    // Add to wishlist
    const res = await axios.post("http://localhost:4001/wishlist", {
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      desc: item.desc,
      img: item.img
    });

    console.log('Added to wishlist:', res.data);
  } catch (err) {
    console.log(err);
  }
};



  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/wishlist");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  return (
    <>
      <Navbar />

      <div className="mt-20 items-center justify-center text-center max-w-screen-2xl mx-auto md:px-20 px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Your Wishlist 💖</h1>
        <p className="text-center text-white-600 mb-8">
          Here's a list of books you love — saved just for you!
          Add them to your cart whenever you're ready to dive in.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6 py-10">
        {book.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-xl text-gray-500 mb-4">Your wishlist is empty 😢</p>
            <a href="/">
              <button className="bg-[#e8bad0] text-black px-6 py-2 rounded hover:bg-pink-300">
                Explore Books
              </button>
            </a>
          </div>
        ) : (
          book.map((item) => (
            <div key={item.id} className="card bg-base-100 w-96 border-4 border-[#897a92]">
              <figure>
                <img src={item.img} alt={item.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.desc}</p>
                <div className="flex gap-5 mt-4">
                  <div className="p-2 bg-[#e8bad0] text-black text-xl rounded-md">{`₹ ${item.price}`}</div>
                  <button className="p-2 bg-[#e8bad0] text-black text-xl rounded-md cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}

export default Wish;
