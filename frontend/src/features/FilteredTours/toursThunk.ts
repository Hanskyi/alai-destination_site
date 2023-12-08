import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {
  IClassificationListShortInto,
  ILocalizationShortInfo,
  ILocalizationShortInfoClassification,
  ILocationListShortInfo,
} from '@/type';

// const queryRoute =
//   '?sort[0]=title:asc&fields[0]=id&fields[1]=title&fields[2]=price&fields[3]=duration&populate[classification][fields][0]=title&populate[location][fields][0]=name&populate[mainImage][fields][0]=url&pagination[pageSize]=10&pagination[page]=1&publicationState=live';

const locations =
  'locations?fields[0]=name&fields[1]=locale&populate[localizations][populate]=true&populate[localizations][fields][0]=locale';

const classifications =
  'classifications?fields[0]=title&fields[1]=locale&populate[localizations][populate]=true&populate[localizations][fields][0]=locale';

// export const fetchToursData = createAsyncThunk<Tour[], string>('tours/fetchAll', async (locale) => {
//   const { data } = await axiosApi.get<ToursPage>('tours' + queryRoute + `&locale=${locale}`);
//   return data.data;
// });

export const fetchLocations = createAsyncThunk<ILocalizationShortInfo[], string>(
  'locations/fetchAll',
  async (locale) => {
    const locationResponse = await axiosApi.get<ILocationListShortInfo>(
      locations + `&locale=${locale}`,
    );
    return locationResponse.data.data;
  },
);

export const fetchClassifications = createAsyncThunk<
  ILocalizationShortInfoClassification[],
  string
>('classifications/fetchAll', async (locale) => {
  const classificationResponse = await axiosApi.get<IClassificationListShortInto>(
    classifications + `&locale=${locale}`,
  );
  return classificationResponse.data.data;
});
