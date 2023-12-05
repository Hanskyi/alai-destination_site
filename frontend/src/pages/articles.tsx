import React, { useEffect } from 'react';
import Articles from '@/features/Articles/Articles';
import { fetchAllArticles } from '@/features/Articles/ArticlesThunk';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';
import Preloader from '@/components/Preloder/Preloader';

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const { locale } = useRouter();
  const loading = useAppSelector((state) => state.articles.fetchLoading);

  useEffect(() => {
    dispatch(fetchAllArticles(locale || 'en'));
  }, [dispatch, locale]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Articles />
        </>
      )}
      );
    </>
  );
};

export const getStaticProps = async (context: { locale: any }) => {
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
};

export default ArticlesPage;
