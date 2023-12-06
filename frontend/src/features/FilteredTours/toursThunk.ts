import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { Tour, ToursPage } from '@/type';

const queryRoute =
  '?sort[0]=title:asc&fields[0]=id&fields[1]=title&fields[2]=price&fields[3]=duration&populate[classification][fields][0]=title&populate[location][fields][0]=name&populate[mainImage][fields][0]=url&pagination[pageSize]=10&pagination[page]=1&publicationState=live&locale[0]=en';

export const fetchToursData = createAsyncThunk<Tour[], string>('tours/fetchAll', async (locale) => {

  const { data } = await axiosApi.get<ToursPage>('tours' + queryRoute);
  return data.data;
});
