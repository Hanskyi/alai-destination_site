import { createAsyncThunk } from '@reduxjs/toolkit';
import { locationsRegionData } from '@/type';
import axiosApi from '@/axiosApi';

interface LocationArgument {
  id: string;
  locale: string;
}

export const fetchAllLocationsRegion = createAsyncThunk<locationsRegionData, LocationArgument>(
  'locationsRegion/fetchOne',
  async ({ id, locale }) => {
    const responseEng = await axiosApi.get<locationsRegionData>(`locations/${id}`);
    const engBlog = responseEng.data;

    if (locale !== engBlog.data.locale) {
      const responseRu = await axiosApi.get<locationsRegionData>(
        `locations/${engBlog.data.localizations[0].id}`,
      );
      return responseRu.data;
    }

    return engBlog;
  },
);
