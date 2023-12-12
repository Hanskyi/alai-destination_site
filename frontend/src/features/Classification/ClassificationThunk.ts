import { createAsyncThunk } from '@reduxjs/toolkit';
import { OneClassification } from '@/type';
import axiosApi from '@/axiosApi';

interface ClassificationArgument {
  id: string;
  locale: string;
}

export const fetchOneClassification = createAsyncThunk<OneClassification, ClassificationArgument>(
  'classification/fetchOne',
  async ({ id, locale }) => {
    const responseEng = await axiosApi.get<OneClassification>(`classifications/${id}`);
    const engBlog = responseEng.data;

    if (locale !== engBlog.data.locale) {
      const responseRu = await axiosApi.get<OneClassification>(
        `classifications/${engBlog.data.localizations[0].id}`,
      );
      return responseRu.data;
    }

    return engBlog;
  },
);
