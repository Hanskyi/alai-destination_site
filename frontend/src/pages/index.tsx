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

// Home.getInitialProps = wrapper.getInitialPageProps((store) => async (context) => {
//   await store.dispatch(fetchHomeData(context.locale ? context.locale : 'en'));
//   return {
//     name: 'Home Page',
//     props: {
//       // You can get the messages from anywhere you like. The recommended
//       // pattern is to put them in JSON files separated by locale and read
//       // the desired one based on the `locale` received from Next.js.
//       messages: (await import(`../../lang/${context.locale}.json`)).default,
//     },
//   };
// });

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  await store.dispatch(fetchHomeData(context.locale ? context.locale : 'en'));
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
});

export default Home;
