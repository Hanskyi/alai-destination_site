import { wrapper } from '@/store/store';
import { fetchHomeData } from '@/features/Home/homeThunk';
import HomePage from '@/features/Home/HomePage';
import Card from '@/components/Card/Card';

const Home = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  await store.dispatch(fetchHomeData(context.locale ? context.locale : 'en'));
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
});

export default Home;
