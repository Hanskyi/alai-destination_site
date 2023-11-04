"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../TravelSlider.scss';

import { Pagination, Navigation } from 'swiper/modules';
import TravelSliderCard from "@/components/travelSliderBlog/Components/TravelSliderCard";
import WaysToTravelCard from "@/components/travelSliderBlog/Components/WaysToTravelCard";

const SwiperBundle= () => {

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
                        slidesPerView: 4.5
                    },
                    1400: {
                        slidesPerView: 4.5
                    },
                    1200: {
                        slidesPerView: 4.1,
                        width: 1024
                    },
                    992: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 3
                    },
                    576: {
                        slidesPerView: 1.5
                    },
                    320: {
                        slidesPerView: 1.3
                    },
                    110: {
                        slidesPerView: 1
                    }
                }}
            >
                <SwiperSlide><WaysToTravelCard/></SwiperSlide>
                <SwiperSlide><WaysToTravelCard/></SwiperSlide>
                <SwiperSlide><WaysToTravelCard/></SwiperSlide>
                <SwiperSlide><WaysToTravelCard/></SwiperSlide>
                <SwiperSlide><WaysToTravelCard/></SwiperSlide>
                <SwiperSlide><WaysToTravelCard/></SwiperSlide>

                <SwiperSlide><TravelSliderCard/></SwiperSlide>
                <SwiperSlide><TravelSliderCard/></SwiperSlide>
                <SwiperSlide><TravelSliderCard/></SwiperSlide>
                <SwiperSlide><TravelSliderCard/></SwiperSlide>
                <SwiperSlide><TravelSliderCard/></SwiperSlide>
                <div className='mySwiper__btns'>
                    <div className='mySwiper__btns__prev'></div>
                    <div className='mySwiper__btns__next'></div>
                </div>
            </Swiper>
    );
};

export default SwiperBundle;