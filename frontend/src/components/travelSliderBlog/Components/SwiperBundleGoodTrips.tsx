'use client'
import React from 'react';

import GoodTripsCard from "@/components/travelSliderBlog/Components/GoodTripsCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import RippleCard from "@/components/travelSliderBlog/Components/RippleCard";

const SwiperBundleGoodTrips = () => {
           return (
               <Swiper
                   slidesPerView={4.5}
                   centeredSlides={false}
                   pagination={false}
                   navigation={{
                       nextEl: '.mySwiper__btns__next',
                       prevEl: '.mySwiper__btns__prev',
                   }}
                   modules={[Pagination, Navigation]}
                   className="mySwiper"
                   breakpoints={{
                       1600: {
                           slidesPerView: 4.3
                       },
                       1400: {
                           slidesPerView: 4.2
                       },
                       1200: {
                           slidesPerView: 4.1,
                       },
                       992: {
                           slidesPerView: 3.9,
                       },
                       780: {
                           slidesPerView: 3
                       },
                       700: {
                           slidesPerView: 2.6
                       },
                       630: {
                           slidesPerView: 2.3
                       },
                       573: {
                           slidesPerView: 2.1
                       },
                       550: {
                           slidesPerView: 2
                       },
                       510: {
                           slidesPerView: 1.8
                       },
                       450: {
                           slidesPerView: 1.6
                       },
                       380: {
                           slidesPerView: 1.3
                       },
                       350: {
                           slidesPerView: 1.2
                       },
                       110: {
                           slidesPerView: 1
                       }
                   }}
               >
                   {Array.from(Array(10)).map((_,index)=>(
                       <SwiperSlide key={index}>
                           <GoodTripsCard/>
                       </SwiperSlide>
                   ))}

                   <SwiperSlide> <a className='swiper-btn'>See all trips</a></SwiperSlide>
                   <div className='mySwiper__btns'>
                       <div className='mySwiper__btns__prev'></div>
                       <div className='mySwiper__btns__next'></div>
                   </div>
               </Swiper>
           )
};

export default SwiperBundleGoodTrips;