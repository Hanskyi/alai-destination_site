import { wrapper } from '@/store/store';
import { fetchHomeData } from '@/features/Home/homeThunk';
import HomePage from '@/features/Home/HomePage';

const Home = () => {
  return (
    <>
      <HomePage />
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
