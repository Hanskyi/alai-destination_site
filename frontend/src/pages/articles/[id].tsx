import React from 'react';
import Blog from '@/features/Blog/Blog';
import { wrapper } from '@/store/store';
import { fetchOneArticle } from '@/features/Articles/ArticlesThunk';

const Article = () => {
  return <Blog />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      const id = params?.id;

      if (!id || Array.isArray(id)) {
        throw new Error('Param id must be a string');
      }

      await store.dispatch(fetchOneArticle({ id, locale: locale || 'en' }));
      return { props: {} };
    },
);

export default Article;
