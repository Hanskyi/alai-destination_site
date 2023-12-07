import React from 'react';
import FilteredTours from '@/features/FilteredTours/FilteredTours';
import { wrapper } from '@/store/store';
import { fetchClassifications, fetchLocations } from '@/features/FilteredTours/toursThunk';
import { useAppSelector } from '@/store/hooks';
import { selectClassifications, selectLocations } from '@/features/FilteredTours/toursSlice';

const Tours = () => {
  const locations = useAppSelector(selectLocations);
  const classifications = useAppSelector(selectClassifications);
  return <FilteredTours locations={locations} classifications={classifications} />;
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  const locations = store.dispatch(fetchLocations(context.locale ? context.locale : 'en'));
  const classifications = store.dispatch(
    fetchClassifications(context.locale ? context.locale : 'en'),
  );
  await Promise.all([locations, classifications]);

  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
});

export default Tours;
