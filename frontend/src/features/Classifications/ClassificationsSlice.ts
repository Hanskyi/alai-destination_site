import { IClassificationData } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';
import { fetchAllClassifications } from '@/features/Classifications/ClassificationsThunk';

interface ClassificationsState {
  classifications: IClassificationData[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ClassificationsState = {
  classifications: [],
  fetchLoading: false,
  error: false,
};

export const classificationsSlice = createSlice({
  name: 'classifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return { ...state, ...action.payload.classifications };
      },
    );

    builder.addCase(fetchAllClassifications.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchAllClassifications.fulfilled, (state, { payload: classifications }) => {
      state.fetchLoading = false;
      state.classifications = classifications;
    });
    builder.addCase(fetchAllClassifications.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const selectClassifications = (state: RootState) => state.classifications.classifications;
