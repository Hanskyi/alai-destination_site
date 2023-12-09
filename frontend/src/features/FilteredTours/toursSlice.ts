import { ILocalizationShortInfo, ILocalizationShortInfoClassification, Tour } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { fetchClassifications, fetchLocations, fetchToursData } from './toursThunk';
import { HYDRATE } from 'next-redux-wrapper';

interface ProductsState {
  tours: Tour[];
  locations: ILocalizationShortInfo[];
  classifications: ILocalizationShortInfoClassification[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  tours: [],
  locations: [],
  classifications: [],
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

    builder.addCase(fetchLocations.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchLocations.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.locations = data;
    });
    builder.addCase(fetchLocations.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });

    builder.addCase(fetchClassifications.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchClassifications.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.classifications = data;
    });
    builder.addCase(fetchClassifications.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const fetchLoadingSelector = (state: RootState) => state.tours.fetchLoading;

export const selectTours = (state: RootState) => state.tours.tours;

export const selectLocations = (state: RootState) => state.tours.locations;

export const selectClassifications = (state: RootState) => state.tours.classifications;
