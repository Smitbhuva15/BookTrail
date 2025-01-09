import React, { useEffect, useState } from 'react';
// import list from '../../public/list.json'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from './Card';

const FreeBook = () => {
  
const[list,setList] =useState([]);
  
useEffect(() => {
  const fetchingdata=async()=>{
    try {
      const response = await fetch("https://booktrail-zid0.onrender.com/book", {
        method: "GET",
      });
     const data=await response.json()
      setList(data);
      
    } catch (error) {
      console.log("Error:", error);
    }

  }
  
 fetchingdata();
}, []);



  

 
   


  const filterData = list.filter((data) => data.category === 'Free');
  

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mb-8">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Discover our wide collection of free books across various genres. Whether you're into thrilling
          mysteries, inspiring stories, or educational resources, explore these no-cost books and enjoy unlimited
          access to engaging reads without spending a dime!
        </p>
      </div>

      <div className="mt-14">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {filterData.map((item) => (
            <SwiperSlide key={item.id} className='mb-4 '>
              <Card item={item} key={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FreeBook;
