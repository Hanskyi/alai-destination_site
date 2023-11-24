import HeroSection from '@/features/Home/HeroSection/HeroSection';
import TravelSliderBlock from '@/features/Home/TravelSliderBlock/TravelSliderBlock';
import Blogs from '@/features/Home/Blogs/Blogs';
import Reviews from '@/features/Home/Reviews/Reviews';
import { wrapper } from '@/store/store';
import { fetchHomeData } from '@/features/Home/homeThunk';
import Purpose from '@/features/Home/Purpose/Purpose';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TravelSliderBlock />
      <Purpose />
      <Blogs />
      <Reviews />
    </>
  );
};

Home.getInitialProps = wrapper.getInitialPageProps((store) => async (context) => {
  await store.dispatch(fetchHomeData(context.locale ? context.locale : 'en'));
  return { name: 'Home Page' };
});

export default Home;
