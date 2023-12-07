import React from 'react';
import { useAppSelector } from '@/store/hooks';
import SwiperComponent from '@/components/SwiperComponent/SwiperComponent';
import { SwiperSlide } from 'swiper/react';
import slideStyle from '@/components/SwiperComponent/SwiperComponent.module.scss';
import 'swiper/css';
import style from './TravelSliderBlock.module.scss';
import WaysToTravelCard from '@/features/Home/TravelSliderBlock/Components/WaysToTravelCard';
import GoodTripsCard from '@/features/Home/TravelSliderBlock/Components/GoodTripsCard';

const TravelSliderBlock = () => {
  const homeClassifications = useAppSelector((state) => state.home.homeData?.homeClassification);
  const homeTour = useAppSelector((state) => state.home.homeData?.homeTour);

  return (
    <div className={`${style.travelSliderBlog} container`}>
      <h3 className={style.travelSliderBlog__title}>Small group travel that good all over.</h3>
      <p className={style.travelSliderBlog__text}>
        Good views, good friends and good times on over 1000 trips in more than 100 countries
      </p>

      <div className={style.travelSliderBlog__first}>
        <p className={style.travelSliderBlog__description}>{homeClassifications?.data.title}</p>
        <SwiperComponent>
          {homeClassifications?.data.classifications.map((category) => (
            <SwiperSlide className={slideStyle.swiper__slide} key={category.id}>
              <WaysToTravelCard item={category} />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>

      <div className="travelSliderBlog__second">
        <p className={style.travelSliderBlog__description}>{homeTour?.data.title}</p>
        <SwiperComponent>
          {homeTour?.data.tours.map((tour) => (
            <SwiperSlide className={slideStyle.swiper__slide} key={tour.id}>
              <GoodTripsCard item={tour} />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </div>
  );
};

export default TravelSliderBlock;
