import React from 'react';
import DetailedTabs from '../features/TourPage/DetailedTabs/DetailedTabs';
import style from '../features/TourPage/TourPage.module.scss';
import Gallery from '@/features/TourPage/GalleryBlock/Gallery';
import DescriptionBlock from '@/features/TourPage/DescriptionBlock/DescriptionBlock';
import TourDetails from '@/features/TourPage/TourDetails/TourDetails';
import TourHeroSection from '@/features/TourPage/TourHeroSection/TourHeroSection';

const TourPage = () => {
  return (
    <div className={style.tour_page}>
      <TourHeroSection />

      <div className="container">
        <div className={style.parentContainer}>
          <div className={style.tour_container}>
            <DescriptionBlock />
            <DetailedTabs />
            <Gallery />
          </div>
          <TourDetails />
        </div>
      </div>
    </div>
  );
};

export default TourPage;
