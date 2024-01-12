import { wrapper } from '@/store/store';
import { fetchHomeData, fetchClassifications, fetchLocations } from '@/features/Home/homeThunk';
import HomePage from '@/features/Home/HomePage';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>alai destination</title>
      </Head>
      <HomePage />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  const locations = store.dispatch(fetchLocations(context.locale ? context.locale : 'en'));
  const homeData = store.dispatch(fetchHomeData(context.locale ? context.locale : 'en'));
  const classifications = store.dispatch(
    fetchClassifications(context.locale ? context.locale : 'en'),
  );
  await Promise.all([homeData, locations, classifications]);

  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
});

export default Home;
