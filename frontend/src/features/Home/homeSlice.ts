import { HomeData } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { fetchHomeData } from './homeThunk';
import { HYDRATE } from 'next-redux-wrapper';

interface ProductsState {
  homeData: HomeData | null;
  fetchLoading: boolean;
}

const initialState: ProductsState = {
  homeData: null,
  fetchLoading: false,
};

export const homeSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return { ...state, ...action.payload.products };
      },
    );

    builder.addCase(fetchHomeData.pending, (state) => {
      state.fetchLoading = true;
    });

    builder.addCase(fetchHomeData.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.homeData = data;
    });
  },
});

export const fetchLoadingSelector = (state: RootState) => state.products.fetchLoading;
