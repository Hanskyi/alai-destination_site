import HeroSection from '@/features/Home/HeroSection/HeroSection';
import TravelSliderBlog from '@/features/Home/TravelSliderBlog/TravelSliderBlog';
import Blogs from '@/features/Home/Blogs/Blogs';
import Reviews from '@/features/Home/Reviews/Reviews';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TravelSliderBlog />
      <Blogs />
      <Reviews />
    </>
  );
};

export default Home;
