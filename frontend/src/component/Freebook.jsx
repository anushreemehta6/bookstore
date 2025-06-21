import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        // Filter only free books
        setBook(res.data.filter((data) => data.category === 'free'));
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  const handleAddToWishlist = async (item) => {
  try {
    // Check if already in wishlist
    // const existing = await axios.get(`http://localhost:4001/wishlist?id=${item.id}`);
    // if (existing.data.length > 0) {
    //   console.log('Already in wishlist');
    //   return;
    // }

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


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-[#e8bad0]">Free books only for you -</h1>
      <p className="py-6 text-sm md:text-xl">
        Welcome to your personal bookshelf of free reads! Dive into enchanting romances,
        gripping fiction, and timeless tales — all handpicked for book lovers like you.
        Whether you're in the mood for a heartwarming love story or an exciting adventure,
        these stories are yours to explore. No cost, just pure reading joy. Start your journey today!
      </p>

      <div className="slider-container">
        <Slider className="card bg-base-100 m-5" {...settings}>
          {book.map((item) => (
            <div key={item.id}>
              <div className="card bg-base-100 w-96 border-4 border-[#897a92]">
                <figure>
                  <img src={item.img} alt={item.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                  </h2>
                  <p>{item.desc}</p>
                  <div className="card-actions justify-around items-center">
                    <div>
                      <button
                        onClick={() => handleAddToWishlist(item)}
                        className="hover:bg-slate-500 bg-pink-500 p-2 rounded-md"
                      >
                        <svg
                          width={35}
                          fill="#ffffff"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 72 72"
                          stroke="#ffffff"
                        >
                          <g>
                            <path d="M36.064,64.68c-2.206,0-3.896-1.436-4.976-2.516C28.535,59.611,10.955,38.448,9.6,36.815
                            C6.413,33.594,4.66,29.342,4.66,24.832c0-4.542,1.778-8.822,5.007-12.05l0.454-0.454c3.228-3.229,7.521-5.007,12.087-5.007
                            c4.565,0,8.858,1.778,12.087,5.007c0.074,0.074,0.143,0.154,0.204,0.239c0.002,0,0.579,0.717,1.501,0.717
                            c0.966,0,1.399-0.571,1.445-0.636c0.082-0.135,0.147-0.208,0.26-0.32c3.229-3.229,7.521-5.007,12.087-5.007
                            c4.566,0,8.859,1.778,12.087,5.007l0.454,0.454c3.229,3.228,5.007,7.508,5.007,12.05c0,4.509-1.752,8.759-4.936,11.979
                            c-1.353,1.646-18.424,22.416-21.362,25.354C39.962,63.245,38.271,64.68,36.064,64.68z"/>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className="flex gap-5">
                      <div className="p-2 bg-[#e8bad0] text-black text-xl rounded-md">{`₹ ${item.price}`}</div>
                      <button className="p-2 bg-[#e8bad0] text-black text-xl rounded-md cursor-pointer">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
