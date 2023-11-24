import React from 'react';
import style from './TravelSliderBlog.module.scss';
import GoodTripsCard from '@/features/Home/TravelSliderBlog/Components/GoodTripsCard';
import SwiperComponent from '@/components/SwiperComponent/SwiperComponent';
import WaysToTravelCard from '@/features/Home/TravelSliderBlog/Components/WaysToTravelCard';

const TravelSliderBlog = () => {
  const content = ['qwd', 'dwq', 'qwd', 'dwq', 'qwd', 'dwq', 'qwd', 'dwq', 'qwd', 'dwq'];

  return (
    <div className={`${style.travelSliderBlog} container`}>
      <h3 className={style.travelSliderBlog__title}>Small group travel that good all over.</h3>
      <p className={style.travelSliderBlog__text}>
        Good views, good friends and good times on over 1000 trips in more than 100 countries
      </p>

      <div className={style.travelSliderBlog__first}>
        <p className={style.travelSliderBlog__description}> Ways to travel</p>
        <SwiperComponent content={content} link="/classifications">
          <WaysToTravelCard />
        </SwiperComponent>
      </div>

      <div className="travelSliderBlog__second">
        <p className={style.travelSliderBlog__description}> Good Trips Only for 2023</p>
        <SwiperComponent content={content}>
          <GoodTripsCard />
        </SwiperComponent>
      </div>
    </div>
  );
};

export default TravelSliderBlog;
