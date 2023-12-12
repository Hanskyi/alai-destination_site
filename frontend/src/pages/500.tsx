import React from 'react';
import Error from '@/features/Error/Error';

const ServerProblemPage = () => {
  return <Error statusCode={'500'} message={'Internal Server Error'} />;
};

export const getStaticProps = async (context: { locale: any }) => {
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
};

export default ServerProblemPage;
