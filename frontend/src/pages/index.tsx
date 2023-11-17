import Footer from '@/UI/Footer/Footer';
import HeroSection from '@/features/Home/HeroSection/HeroSection';
import TravelSliderBlog from '@/features/Home/TravelSliderBlog/TravelSliderBlog';
import Purpose from '@/features/Home/Purpose/Purpose';
import Blogs from '@/features/Home/Blogs/Blogs';
import Reviews from '@/features/Home/Reviews/Reviews';
import Header from '@/UI/Header/Header';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TravelSliderBlog />
      <Purpose />
      <Blogs />
      <Reviews />
      {/*<Tour />*/}
    </>
  );
}
