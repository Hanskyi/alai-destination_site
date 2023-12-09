import { HomeData, ILocalizationShortInfo, ILocalizationShortInfoClassification } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { fetchHomeData, fetchLocations } from './homeThunk';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchClassifications } from '@/features/FilteredTours/toursThunk';

interface ProductsState {
  classifications: ILocalizationShortInfoClassification[];
  locations: ILocalizationShortInfo[];
  homeData: HomeData | null;
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  homeData: null,
  locations: [],
  classifications: [],
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

export const fetchLoadingSelector = (state: RootState) => state.home.fetchLoading;

export const selectLocations = (state: RootState) => state.home.locations;

export const selectClassifications = (state: RootState) => state.home.classifications;
