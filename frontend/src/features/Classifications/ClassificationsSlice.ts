import { IClassificationData, IClassificationPage } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';
import {
  fetchAllClassifications,
  fetchClassificationPage,
} from '@/features/Classifications/ClassificationsThunk';

interface ClassificationsState {
  content: IClassificationPage | null;
  classifications: IClassificationData[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ClassificationsState = {
  content: null,
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

    builder.addCase(fetchClassificationPage.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchClassificationPage.fulfilled, (state, { payload: content }) => {
      state.fetchLoading = false;
      state.content = content;
    });
    builder.addCase(fetchClassificationPage.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const selectClassifications = (state: RootState) => state.classifications.classifications;
export const selectClassificationPage = (state: RootState) => state.classifications.content;
