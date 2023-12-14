import React from 'react';
import AboutUsPage from '@/features/AboutUs/AboutUsPage';
import { wrapper } from '@/store/store';
import { fetchAllAboutUsPage } from '@/features/AboutUs/AboutUsThunk';

const AboutUs = () => {
  return <AboutUsPage />;
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  await store.dispatch(fetchAllAboutUsPage(context.locale ? context.locale : 'en'));

  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
});

export default AboutUs;
