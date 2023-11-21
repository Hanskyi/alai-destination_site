import HeroSection from '@/features/Home/HeroSection/HeroSection';
import TravelSliderBlog from '@/features/Home/TravelSliderBlog/TravelSliderBlog';
import Purpose from '@/features/Home/Purpose/Purpose';
import Blogs from '@/features/Home/Blogs/Blogs';
import Reviews from '@/features/Home/Reviews/Reviews';
import { wrapper } from '@/store/store';
import Tour from "@/pages/tours/[id]";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TravelSliderBlog />
      <Purpose />
      <Blogs />
      <Reviews />
      {/*<FilteredTours />*/}
      {/*<Tour />*/}
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  // await store.dispatch(fetchProducts());
  return { props: {} };
});

export default Home;
