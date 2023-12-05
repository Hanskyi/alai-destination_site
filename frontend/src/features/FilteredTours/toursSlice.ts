import { Tour } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { fetchToursData } from './toursThunk';
import { HYDRATE } from 'next-redux-wrapper';

interface ProductsState {
  tours: Tour[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  tours: [],
  fetchLoading: false,
  error: false,
};

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return { ...state, ...action.payload.tours };
      },
    );

    builder.addCase(fetchToursData.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchToursData.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.tours = data;
    });
    builder.addCase(fetchToursData.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const fetchLoadingSelector = (state: RootState) => state.tours.fetchLoading;

export const selectTours = (state: RootState) => state.tours.tours;
