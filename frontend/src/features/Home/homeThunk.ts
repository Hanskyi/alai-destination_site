import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { HomeData } from '@/type';

const formatQuery = (query: string) => {
  const splitQuery = query.split('-');
  return splitQuery[0] + splitQuery[1][0].toUpperCase() + splitQuery[1].slice(1);
};

export const fetchHomeData = createAsyncThunk<HomeData, string>('home/fetchAll', async (locale) => {
  const queries = [
    'hero-section',
    'home-article',
    'home-classification',
    'home-tour',
    'purpose-block',
    'reviews-block',
  ];

  const homeData = await Promise.all(
    queries.map(async (query) => {
      const { data } = await axiosApi.get(query + `?locale=${locale}`);
      const mutatedQuery = formatQuery(query);
      return { [mutatedQuery]: data };
    }),
  );

  const homeDataObject: HomeData = Object.assign({}, ...homeData);
  return homeDataObject;
});
