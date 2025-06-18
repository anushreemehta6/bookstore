import React from 'react'
import list from "../../public/list.json"
import Slider from "react-slick";

function Freebook() {
   
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    const filterdata = list.filter((data) => data.category === 'free');
    
    
    return (
        <div className='max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col gap-3'>
            <h1 className='text-3xl font-bold text-[#e8bad0]'>Free books only for you- </h1>
            <p className="py-6 text-sm md:text-xl">Welcome to your personal bookshelf of free reads! Dive into enchanting romances, gripping fiction, and timeless tales — all handpicked for book lovers like you. Whether you're in the mood for a heartwarming love story or an exciting adventure, these stories are yours to explore. No cost, just pure reading joy. Start your journey today! </p>
        
        <div className='slider-container'>
    <Slider className=" card bg-base-100 m-5  " {...settings}>
           {filterdata.map((item)=>

         ( 
            <div key={item.id}>
             
             <div  className=" card bg-base-100 w-96 border-4 border-[#897a92] ">
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

           </Slider>
           </div>

          
        </div>
    )
}

export default Freebook