import React from 'react';
import Error from '@/features/Error/Error';

const NotFoundPage = () => {
  return <Error statusCode={'404'} message={'Page Not Found'} />;
};

export const getStaticProps = async (context: { locale: any }) => {
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
};

export default NotFoundPage;
