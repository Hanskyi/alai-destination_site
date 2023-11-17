import Footer from '@/UI/Footer/Footer';
import HeroSection from '@/features/Home/HeroSection/HeroSection';
import TravelSliderBlog from '@/features/Home/TravelSliderBlog/TravelSliderBlog';
import Purpose from '@/features/Home/Purpose/Purpose';
import Blogs from '@/features/Home/Blogs/Blogs';
import Reviews from '@/features/Home/Reviews/Reviews';
import Header from '@/UI/Header/Header';
import TourPage from '@/pages/tour-detailed';
import Tour from '@/pages/tours/[id]';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TravelSliderBlog />
      <Purpose />
      <Blogs />
      <Reviews />
      {/*<Tour />*/}
      <Footer />
    </>
  );
}
