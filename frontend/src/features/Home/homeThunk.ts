import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {
  HomeData,
  IClassificationListShortInto,
  ILocalizationShortInfo,
  ILocalizationShortInfoClassification,
  ILocationListShortInfo,
} from '@/type';

const formatQuery = (query: string) => {
  const splitQuery = query.split('-');
  return splitQuery[0] + splitQuery[1][0].toUpperCase() + splitQuery[1].slice(1);
};

const locations =
  'locations?fields[0]=name&fields[1]=locale&populate[localizations][populate]=true&populate[localizations][fields][0]=locale';

const classifications =
  'classifications?fields[0]=title&fields[1]=locale&populate[localizations][populate]=true&populate[localizations][fields][0]=locale';

export const fetchLocations = createAsyncThunk<ILocalizationShortInfo[], string>(
  'locations/fetchAll',
  async (locale) => {
    const locationResponse = await axiosApi.get<ILocationListShortInfo>(
      locations + `&locale=${locale}`,
    );
    return locationResponse.data.data;
  },
);

export const fetchClassifications = createAsyncThunk<
  ILocalizationShortInfoClassification[],
  string
>('classifications/fetchAll', async (locale) => {
  const classificationResponse = await axiosApi.get<IClassificationListShortInto>(
    classifications + `&locale=${locale}`,
  );
  return classificationResponse.data.data;
});

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
