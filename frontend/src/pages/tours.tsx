import React from 'react';
import FilteredTours from '@/features/FilteredTours/FilteredTours';
import { wrapper } from '@/store/store';
import { fetchToursData } from '@/features/FilteredTours/toursThunk';
import { useAppSelector } from '@/store/hooks';
import { selectTours } from '@/features/FilteredTours/toursSlice';

const Tours = () => {
  const tours = useAppSelector(selectTours);

  return (
    <div>
      <FilteredTours tours={tours} />
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  await store.dispatch(fetchToursData(context.locale ? context.locale : 'en'));
  return {
    props: {
      messages: (await import(`../../lang/${context.locale}.json`)).default,
    },
  };
});

export default Tours;
