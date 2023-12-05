import React, { useEffect, useState } from 'react';
import FilteredTours from '@/features/FilteredTours/FilteredTours';
import axios from 'axios';
import { Tour } from '@/type';
import { wrapper } from '@/store/store';
import { fetchHomeData } from '@/features/Home/homeThunk';
import { fetchToursData } from '@/features/FilteredTours/toursThunk';
import { useAppSelector } from '@/store/hooks';
import { selectTours } from '@/features/FilteredTours/toursSlice';

const Tours = () => {
  // const [tours, setTours] = useState<Tour[]>([]);

  const tours = useAppSelector(selectTours);
  console.log(tours);

  // useEffect(() => {
  //   const fetchTourData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:1337/api/tours');
  //       const data = response.data.data;
  //       setTours(data);
  //     } catch (error) {
  //       console.error('Error fetching tour data:', error);
  //     }
  //   };
  //
  //   void fetchTourData();
  // }, []);

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
