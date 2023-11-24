import HeroSection from '@/features/Home/HeroSection/HeroSection';
import TravelSliderBlog from '@/features/Home/TravelSliderBlog/TravelSliderBlog';
import Blogs from '@/features/Home/Blogs/Blogs';
import Reviews from '@/features/Home/Reviews/Reviews';
import { wrapper } from '@/store/store';
import { fetchHomeData } from '@/features/Home/homeThunk';
import Purpose from '@/features/Home/Purpose/Purpose';
const Home = () => {
  return (
    <>
      <HeroSection />
      <TravelSliderBlog />
      <Purpose />
      <Blogs />
      <Reviews />
    </>
  );
};

Home.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await store.dispatch(fetchHomeData());
  return { name: 'Home Page' };
});

export default Home;
