import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import style from './SwiperComponent.module.scss';
import React, { PropsWithChildren } from 'react';
import 'swiper/css';
import Link from 'next/link';

interface Props {
  link?: string;
}

const SwiperComponent: React.FC<PropsWithChildren<Props>> = ({ children, link }) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={16}
      pagination={false}
      navigation={{
        nextEl: '.mySwiper__btns__next',
        prevEl: '.mySwiper__btns__prev',
      }}
      modules={[Pagination, Navigation]}
      className={style.mySwiper}
      style={{ overflow: 'visible' }}
    >
      {children}
      <SwiperSlide className={style.mySwiper__slide}>
        <Link className={style.swiper__btn} href={`${link}`}>
          See all trips
        </Link>
      </SwiperSlide>
      <div className={style.mySwiper__btns}>
        <div className={`${style.mySwiper__btns__prev} mySwiper__btns__prev`}></div>
        <div className={`${style.mySwiper__btns__next} mySwiper__btns__next`}></div>
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
