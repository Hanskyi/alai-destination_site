import React from 'react';
import Classifications from '@/features/Classifications/Classifications';
import { useAppSelector } from '@/store/hooks';
import {
  fetchAllClassifications,
  fetchClassificationPage,
} from '@/features/Classifications/ClassificationsThunk';
import Preloader from '@/components/Preloder/Preloader';
import { wrapper } from '@/store/store';

const ClassificationsPage = () => {
  const loading = useAppSelector((state) => state.classifications.fetchLoading);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Classifications />
        </>
      )}
      );
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  const classifications = store.dispatch(
    fetchAllClassifications(context.locale ? context.locale : 'en'),
  );
  const classificationPage = store.dispatch(
    fetchClassificationPage(context.locale ? context.locale : 'en'),
  );

  await Promise.all([classifications, classificationPage]);
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
});

export default ClassificationsPage;
