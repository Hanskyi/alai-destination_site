import React from 'react';
import style from './TravelSliderBlog.module.scss';
import SwiperBundleWaysToTravel from '@/features/Home/TravelSliderBlog/Components/SwiperBundleWaysToTravel';
import SwiperBundleGoodTrips from '@/features/Home/TravelSliderBlog/Components/SwiperBundleGoodTrips';

const TravelSliderBlog = () => {
  return (
    <div className={`${style.travelSliderBlog} container`}>
      <h3 className={style.travelSliderBlog__title}>Small group travel that good all over.</h3>
      <p className={style.travelSliderBlog__text}>
        Good views, good friends and good times on over 1000 trips in more than 100 countries
      </p>

      <div className={style.travelSliderBlog__first}>
        <p className={style.travelSliderBlog__description}> Ways to travel</p>
        <SwiperBundleWaysToTravel />
      </div>

      <div className="travelSliderBlog__second">
        <p className={style.travelSliderBlog__description}> Good Trips Only for 2023</p>
        <SwiperBundleGoodTrips />
      </div>
    </div>
  );
};

export default TravelSliderBlog;
