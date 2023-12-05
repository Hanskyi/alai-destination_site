import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { HomeData, Tour, ToursPage } from '@/type';

export const fetchToursData = createAsyncThunk<Tour[], string>('tours/fetchAll', async (locale) => {
  const { data } = await axiosApi.get<ToursPage>('tours' + `?locale=${locale}`);
  return data.data;
});
