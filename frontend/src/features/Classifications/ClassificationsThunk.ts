import { createAsyncThunk } from '@reduxjs/toolkit';
import { IClassificationData, IClassificationDataData } from '@/type';
import axiosApi from '@/axiosApi';

export const fetchAllClassifications = createAsyncThunk<IClassificationData[], string>(
  'classifications/fetchAll',
  async (locale) => {
    const { data: classificationsResponse } = await axiosApi.get<IClassificationDataData>(
      `classifications?locale=${locale}`,
    );
    return classificationsResponse.data;
  },
);
