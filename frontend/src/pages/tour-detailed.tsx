import React, { useEffect, useState } from 'react';
import DetailedTabs from '../features/TourPage/DetailedTabs/DetailedTabs';
import style from '../features/TourPage/TourPage.module.scss';
import Gallery from '@/features/TourPage/GalleryBlock/Gallery';
import DescriptionBlock from '@/features/TourPage/DescriptionBlock/DescriptionBlock';
import TourDetails from '@/features/TourPage/TourDetails/TourDetails';
import TourHeroSection from '@/features/TourPage/TourHeroSection/TourHeroSection';
import axios from 'axios';
import FaqList from '@/components/FaqList/FaqList';
import { FAQLIST } from '@/dummyData';

interface TourData {
  title: string;
  subTitle: string;
  mainImage?: { url: string };
  previewDescription: string;
}

const TourPage = () => {
  const [tourData, setTourData] = useState<TourData | null>(null);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/tours/5');
        const data = response.data.data;

        setTourData(data);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    void fetchTourData();
  }, []);

  return (
    <div className={style.tour_page}>
      <TourHeroSection
        title={tourData?.title || ''}
        subTitle={tourData?.subTitle || ''}
        mainImage={tourData?.mainImage?.url || ''}
      />

      <div className="container">
        <div className={style.parentContainer}>
          <div className={style.tour_container}>
            <DescriptionBlock data={tourData?.previewDescription || ''} />
            <DetailedTabs />
            <Gallery />
            <FaqList faqList={FAQLIST} />
          </div>
          <TourDetails />
        </div>
      </div>
    </div>
  );
};

export default TourPage;
