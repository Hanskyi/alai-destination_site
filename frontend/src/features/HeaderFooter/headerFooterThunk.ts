import { createAsyncThunk } from '@reduxjs/toolkit';
import { IHeaderFooterInfo } from '@/type';
import axiosApi from '@/axiosApi';

export const fetchHFData = createAsyncThunk<IHeaderFooterInfo>('fetchHF', async () => {
  const { data } = await axiosApi<IHeaderFooterInfo>(`info`);

  return data;
});
