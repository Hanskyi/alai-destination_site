import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { HYDRATE } from 'next-redux-wrapper';
import { OneArticle, OneArticleData } from '@/type';
import { fetchAllArticles, fetchOneArticle } from '@/features/Articles/ArticlesThunk';

interface ArticlesState {
  articles: OneArticleData[];
  article: OneArticle | null;
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ArticlesState = {
  articles: [],
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

    builder.addCase(fetchAllArticles.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchAllArticles.fulfilled, (state, { payload: articles }) => {
      state.fetchLoading = false;
      state.articles = articles;
    });
    builder.addCase(fetchAllArticles.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const selectArticles = (state: RootState) => state.articles.articles;
