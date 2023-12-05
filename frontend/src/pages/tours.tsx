import React, { useEffect, useState } from 'react';
import FilteredTours from '@/features/FilteredTours/FilteredTours';
import axios from 'axios';
import { Tour } from '@/type';
import { GetStaticPropsContext } from 'next';

const Tours = () => {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/tours/');
        const data = response.data.data;
        setTours(data);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    void fetchTourData();
  }, []);

  return (
    <div>
      <FilteredTours tours={tours} />
    </div>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
    },
  };
}

export default Tours;
