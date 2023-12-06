import {IAboutUsPage} from '@/type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {RootState} from '@/store/store';
import {fetchAllAboutUsPage} from '@/features/AboutUs/AboutUsThunk';

interface AboutUsState {
  aboutUs: IAboutUsPage[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: AboutUsState = {
  aboutUs: [],
  fetchLoading: false,
  error: false,
};

export const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return {...state, ...action.payload.aboutUs};
      },
    );

    builder.addCase(fetchAllAboutUsPage.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchAllAboutUsPage.fulfilled, (state, {payload: aboutUs}) => {
      state.fetchLoading = false;
      state.aboutUs = aboutUs;
    });
    builder.addCase(fetchAllAboutUsPage.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const selectAboutUs = (state: RootState) => state.aboutUs.aboutUs;
