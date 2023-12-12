import React from 'react';
import NotFound from '@/features/NotFound/NotFound';

const NotFoundPage = () => {
  return <NotFound />;
};

export const getStaticProps = async (context: { locale: any }) => {
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
};

export default NotFoundPage;
