import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAboutUs, IAboutUsPage } from '@/type';
import axiosApi from '@/axiosApi';

export const fetchAllAboutUsPage = createAsyncThunk<IAboutUsPage, string>(
  'aboutUs/fetchAll',
  async (locale) => {
    const { data: aboutUsPageResponse } = await axiosApi.get<IAboutUs>(
      `about-us-page?locale=${locale}`,
    );
    return aboutUsPageResponse.data;
  },
);
