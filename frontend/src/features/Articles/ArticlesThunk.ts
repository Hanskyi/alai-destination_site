import { createAsyncThunk } from '@reduxjs/toolkit';
import { IArticle, OneArticle, OneArticleData } from '@/type';
import axiosApi from '@/axiosApi';

interface ArticleArgument {
  id: string;
  locale: string;
}

export const fetchOneArticle = createAsyncThunk<OneArticle, ArticleArgument>(
  'article/fetchOne',
  async ({ id, locale }) => {
    const responseEng = await axiosApi.get<OneArticle>(`blogs/${id}`);
    const engBlog = responseEng.data;

    if (locale !== engBlog.data.locale) {
      const responseRu = await axiosApi.get<OneArticle>(
        `blogs/${engBlog.data.localizations[0].id}`,
      );
      return responseRu.data;
    }

    return engBlog;
  },
);

export const fetchAllArticles = createAsyncThunk<OneArticleData[], string>(
  'articles/fetchAll',
  async (locale) => {
    const { data: articlesResponse } = await axiosApi.get<IArticle>(`blogs?locale=${locale}`);
    return articlesResponse.data;
  },
);
