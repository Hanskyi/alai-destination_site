import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IClassificationData,
  IClassificationDataData,
  IClassificationPage,
  IClassificationPageData,
} from '@/type';
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

export const fetchClassificationPage = createAsyncThunk<IClassificationPage, string>(
  'classifications/fetchContent',
  async (locale) => {
    const { data: aboutUsPageResponse } = await axiosApi.get<IClassificationPageData>(
      `classification-page?locale=${locale}`,
    );
    return aboutUsPageResponse.data;
  },
);
