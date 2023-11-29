import { IHeaderFooterInfo } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';
import { fetchHFData } from '@/features/HeaderFooter/headerFooterThunk';

interface IHeaderFooterState {
  hfData: IHeaderFooterInfo | null;
  fetchLoading: boolean;
}

const initialState: IHeaderFooterState = {
  hfData: null,
  fetchLoading: false,
};

export const headerFooterSlice = createSlice({
  name: 'headerFooter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return { ...state, ...action.payload.headerFooter };
      },
    );

    builder.addCase(fetchHFData.pending, (state) => {
      state.fetchLoading = true;
    });

    builder.addCase(fetchHFData.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.hfData = data;
    });

    builder.addCase(fetchHFData.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const selectHFData = (state: RootState) => state.headerFooter.hfData;
