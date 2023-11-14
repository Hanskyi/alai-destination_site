'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from '../TravelSliderBlog.module.scss';

import { Navigation, Pagination } from 'swiper/modules';
import WaysToTravelCard from '@/features/Home/TravelSliderBlog/Components/WaysToTravelCard';

const SwiperBundleWaysToTravel = () => {
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
      className={style.mySwiper}
      breakpoints={{
        1600: {
          slidesPerView: 4.3,
        },
        1400: {
          slidesPerView: 4.2,
        },
        1200: {
          slidesPerView: 4.1,
        },
        992: {
          slidesPerView: 3.9,
        },
        780: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2.6,
        },
        630: {
          slidesPerView: 2.3,
        },
        573: {
          slidesPerView: 2.1,
        },
        541: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 1.8,
        },
        450: {
          slidesPerView: 1.6,
        },
        380: {
          slidesPerView: 1.3,
        },
        350: {
          slidesPerView: 1.2,
        },
        110: {
          slidesPerView: 1,
        },
      }}
    >
      {Array.from(Array(10)).map((_, index) => (
        <SwiperSlide key={index}>
          <WaysToTravelCard />
        </SwiperSlide>
      ))}

      <SwiperSlide>
        {' '}
      <a className={style.swiper__btn}>View more themes</a>
      </SwiperSlide>
      <div className={style.mySwiper__btns}>
        <div className={`${style.mySwiper__btns__prev} mySwiper__btns__prev`}></div>
        <div className={`${style.mySwiper__btns__next} mySwiper__btns__next`}></div>
      </div>
    </Swiper>
  );
};

export default SwiperBundleWaysToTravel;
