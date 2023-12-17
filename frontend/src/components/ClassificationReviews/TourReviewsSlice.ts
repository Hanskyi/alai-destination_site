import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { HYDRATE } from 'next-redux-wrapper';
import { TourReview } from '@/type';
import { fetchReviewsForClassification, fetchReviewsForTour } from './TourReviewsThunk';

interface ReviewsState {
  reviews: TourReview[] | null;
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ReviewsState = {
  reviews: null,
  fetchLoading: false,
  error: false,
};

export const tourReviewSlice = createSlice({
  name: 'tourReview',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return { ...state, ...action.payload.tourReview };
      },
    );

    builder.addCase(fetchReviewsForClassification.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchReviewsForClassification.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.reviews = data;
    });
    builder.addCase(fetchReviewsForClassification.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
    builder.addCase(fetchReviewsForTour.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchReviewsForTour.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.reviews = data;
    });
    builder.addCase(fetchReviewsForTour.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const fetchLoadingSelector = (state: RootState) => state.tourReview.fetchLoading;
export const selectLocations = (state: RootState) => state.tourReview.reviews;
