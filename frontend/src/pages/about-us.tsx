import React from 'react';
import AboutUsPage from '@/features/AboutUs/AboutUsPage';
import { GetStaticPropsContext } from 'next';

const AboutUs = () => {
  return (
    <>
      <AboutUsPage />
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
    },
  };
}

export default AboutUs;
