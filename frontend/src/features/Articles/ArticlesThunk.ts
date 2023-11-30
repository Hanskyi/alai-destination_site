import { createAsyncThunk } from '@reduxjs/toolkit';
import { OneArticle } from '@/type';
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
