import React, { useEffect } from 'react';
import Classifications from '@/features/Classifications/Classifications';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';
import {
  fetchAllClassifications,
  fetchClassificationPage,
} from '@/features/Classifications/ClassificationsThunk';
import Preloader from '@/components/Preloder/Preloader';
import { GetStaticPropsContext } from 'next';
import { wrapper } from '@/store/store';
import { fetchAllAboutUsPage } from '@/features/AboutUs/AboutUsThunk';
import {
  fetchClassifications,
  fetchLocations,
  fetchToursData,
} from '@/features/FilteredTours/toursThunk';

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
