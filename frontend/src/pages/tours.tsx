import React from 'react';
import FilteredTours from '@/features/FilteredTours/FilteredTours';
import { wrapper } from '@/store/store';
import {
  fetchClassifications,
  fetchLocations,
  fetchToursData,
} from '@/features/FilteredTours/toursThunk';
import { useAppSelector } from '@/store/hooks';
import {
  selectClassifications,
  selectLocations,
  selectTours,
} from '@/features/FilteredTours/toursSlice';
import { useRouter } from 'next/router';
import {
  IClassificationListShortInto,
  ILocalizationShortInfo,
  ILocalizationShortInfoClassification,
  ILocationListShortInfo,
  Tour,
  ToursPage,
} from '@/type';
import { GetServerSideProps } from 'next';
import axiosApi from '@/axiosApi';

interface Props {
  tours: Tour[];
  locations: ILocalizationShortInfo[];
  classifications: ILocalizationShortInfoClassification[];
}

const Tours = ({ tours, locations, classifications }: Props) => {
  const router = useRouter();

  // const tours = useAppSelector(selectTours);
  // const locations = useAppSelector(selectLocations);
  // const classifications = useAppSelector(selectClassifications);

  return (
    <FilteredTours
      router={router}
      tours={tours}
      locations={locations}
      classifications={classifications}
    />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = wrapper.getServerSideProps(
  (store) => async (context) => {
    try {
      const queryParameters = [];

      queryParameters.push('fields[0]=id');
      queryParameters.push('fields[1]=title');
      queryParameters.push('fields[2]=price');
      queryParameters.push('fields[3]=duration');

      if (context.query.classification) {
        queryParameters.push(
          `filters[classification][title][$eq]=${encodeURIComponent(
            context.query.classification as string,
          )}`,
        );
      }

      if (context.query.location) {
        queryParameters.push(
          `filters[location][name][$eq]=${encodeURIComponent(context.query.location as string)}`,
        );
      }

      if (context.query.duration) {
        queryParameters.push(`filters[duration][$gte]=${context.query.duration as string}`);
      }

      if (context.query.price === 'lowToHigh' || context.query.price === 'highToLow') {
        queryParameters.push(`sort[price]=${context.query.price === 'lowToHigh' ? 'asc' : 'desc'}`);
      }

      queryParameters.push('populate[classification][fields][0]=title');
      queryParameters.push('populate[location][fields][0]=name');
      queryParameters.push('populate[mainImage][fields][0]=url');

      const queryString = queryParameters.join('&');

      let toursUrl = `tours?fields[0]=id&fields[1]=title&fields[2]=price&fields[3]=duration&populate[classification][fields][0]=title&populate[location][fields][0]=name&populate[mainImage][fields][0]=url&populate[localizations][populate]=true&populate[localizations][fields][0]=locale`;

      if (
        context.query.location ||
        context.query.classification ||
        context.query.price ||
        context.query.duration
      ) {
        toursUrl = `tours?${queryString}`;
      }

      const toursResponse = await axiosApi.get<ToursPage>(`${toursUrl}&locale=${context.locale}`);
      const tours = toursResponse.data.data;

      const locationsUrl =
        'locations?fields[0]=name&fields[1]=locale&populate[localizations][populate]=true&populate[localizations][fields][0]=locale';
      const locationsResponse = await axiosApi.get<ILocationListShortInfo>(
        `${locationsUrl}&locale=${context.locale}`,
      );
      const locations = locationsResponse.data.data;

      const classificationsUrl =
        'classifications?fields[0]=title&fields[1]=locale&populate[localizations][populate]=true&populate[localizations][fields][0]=locale';
      const classificationsResponse = await axiosApi.get<IClassificationListShortInto>(
        `${classificationsUrl}&locale=${context.locale}`,
      );
      const classifications = classificationsResponse.data.data;

      return {
        props: {
          tours,
          locations,
          classifications,
          messages: (await import(`../../lang/${context.locale}.json`)).default,
        },
      };
    } catch (error) {
      console.error('Error in getServerSideProps:', error);
      return {
        props: {
          tours: [],
          locations: [],
          classifications: [],
          messages: (await import(`../../lang/${context.locale}.json`)).default,
        },
      };
    }
  },
);

// export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
//   const tours = store.dispatch(fetchToursData(context.locale ? context.locale : 'en'));
//   const locations = store.dispatch(fetchLocations(context.locale ? context.locale : 'en'));
//   const classifications = store.dispatch(
//     fetchClassifications(context.locale ? context.locale : 'en'),
//   );
//   await Promise.all([tours, locations, classifications]);
//   return {
//     props: {
//       messages: (await import(`../../lang/${context.locale}.json`)).default,
//     },
//   };
// });

export default Tours;
