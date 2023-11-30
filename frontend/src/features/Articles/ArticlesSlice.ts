import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { HYDRATE } from 'next-redux-wrapper';
import { OneArticle } from '@/type';
import { fetchOneArticle } from '@/features/Articles/ArticlesThunk';

interface ProductsState {
  article: OneArticle | null;
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  article: null,
  fetchLoading: false,
  error: false,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return { ...state, ...action.payload.articles };
      },
    );

    builder.addCase(fetchOneArticle.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchOneArticle.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.article = data;
    });
    builder.addCase(fetchOneArticle.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});
