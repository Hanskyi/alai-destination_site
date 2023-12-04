import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { HYDRATE } from 'next-redux-wrapper';
import { OneClassification } from '@/type';
import { fetchOneClassification } from '@/features/Classification/ClassificationThunk';

interface ProductsState {
  classification: OneClassification | null;
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  classification: null,
  fetchLoading: false,
  error: false,
};

export const classificationSlice = createSlice({
  name: 'classification',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return { ...state, ...action.payload.classification };
      },
    );

    builder.addCase(fetchOneClassification.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchOneClassification.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.classification = data;
    });
    builder.addCase(fetchOneClassification.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});
