import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import style from './SwiperComponent.module.scss';
import React, { PropsWithChildren } from 'react';
import 'swiper/css';

interface Props {
  swiperLink?: string;
}

const SwiperComponent: React.FC<PropsWithChildren<Props>> = ({ children, swiperLink }) => {
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
    >
      {children}
      <SwiperSlide className={style.swiper__slide}>
        <div className={style.swiper__default}>
          <a className={style.swiper__btn}>See all trips</a>
        </div>
      </SwiperSlide>
      <div className={style.mySwiper__btns}>
        <div className={`${style.mySwiper__btns__prev} mySwiper__btns__prev`}></div>
        <div className={`${style.mySwiper__btns__next} mySwiper__btns__next`}></div>
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
