import React, { useEffect } from 'react';
import Classifications from '@/features/Classifications/Classifications';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';
import { fetchAllClassifications } from '@/features/Classifications/ClassificationsThunk';
import Preloader from '@/components/Preloder/Preloader';
import { GetStaticPropsContext } from 'next';

const ClassificationsPage = () => {
  const dispatch = useAppDispatch();
  const { locale } = useRouter();
  const loading = useAppSelector((state) => state.articles.fetchLoading);

  useEffect(() => {
    dispatch(fetchAllClassifications(locale || 'en'));
  }, [dispatch, locale]);
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
    },
  };
}

export default ClassificationsPage;
