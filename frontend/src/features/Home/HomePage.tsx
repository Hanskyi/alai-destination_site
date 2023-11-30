import React from 'react';
import { useAppSelector } from '@/store/hooks';
import Preloader from '@/components/Preloder/Preloader';
import HeroSection from '@/features/Home/HeroSection/HeroSection';
import TravelSliderBlock from '@/features/Home/TravelSliderBlock/TravelSliderBlock';
import Purpose from '@/features/Home/Purpose/Purpose';
import Blogs from '@/features/Home/Blogs/Blogs';
import Reviews from '@/features/Home/Reviews/Reviews';

const HomePage = () => {
  const loading = useAppSelector((state) => state.home.fetchLoading);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <HeroSection />
          <TravelSliderBlock />
          <Purpose />
          <Blogs />
          <Reviews />
        </>
      )}
      );
    </>
  );
};
export default HomePage;
