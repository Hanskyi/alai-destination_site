import React from 'react';
import Classification from '@/features/Classification/Classification';
import { fetchOneClassification } from '@/features/Classification/ClassificationThunk';
import { wrapper } from '@/store/store';

const ClassificationItem = () => {
  return (
    <>
      <Classification />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      const id = params?.id;

      if (!id || Array.isArray(id)) {
        throw new Error('Param id must be a string');
      }

      await store.dispatch(fetchOneClassification({ id, locale: locale || 'en' }));
      return { props: {} };
    },
);

export default ClassificationItem;
