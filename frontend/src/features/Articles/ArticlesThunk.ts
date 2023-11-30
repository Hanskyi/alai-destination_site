import { createAsyncThunk } from '@reduxjs/toolkit';
import { OneArticle } from '@/type';
import axiosApi from '@/axiosApi';
import { RootState } from '@/store/store';

interface ArticleArgument {
  id: string;
  locale: string;
}

export const fetchOneArticle = createAsyncThunk<OneArticle, ArticleArgument, { state: RootState }>(
  'article/fetchOne',
  async ({ id, locale }, { getState }) => {
    const previousLang = getState().articles.article?.data.locale;
    const responseEng = await axiosApi.get<OneArticle>(`blogs/${id}`);
    const engBlog = responseEng.data;
    console.log(previousLang, locale);

    if (locale !== previousLang) {
      console.log(locale);
      const responseRu = await axiosApi.get<OneArticle>(
        `blogs/${engBlog.data.localizations[0].id}`,
      );
      return responseRu.data;
    }

    return engBlog;
  },
);
