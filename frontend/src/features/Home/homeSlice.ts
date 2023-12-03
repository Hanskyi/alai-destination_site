import { HomeData } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { fetchHomeData } from './homeThunk';
import { HYDRATE } from 'next-redux-wrapper';

interface ProductsState {
  homeData: HomeData | null;
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  homeData: null,
  fetchLoading: false,
  error: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return { ...state, ...action.payload.home };
      },
    );

    builder.addCase(fetchHomeData.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchHomeData.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.homeData = data;
    });
    builder.addCase(fetchHomeData.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const fetchLoadingSelector = (state: RootState) => state.home.fetchLoading;
