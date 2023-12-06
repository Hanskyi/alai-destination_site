import React from 'react';
import LocationsRegion from '@/features/LocationsRegion/LocationsRegion';
import { wrapper } from '@/store/store';
import { fetchAllLocationsRegion } from '@/features/LocationsRegion/LocationsRegionThunk';

const LocationPage = () => {
  return (
    <div>
      <LocationsRegion />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      const id = params?.id;

      if (!id || Array.isArray(id)) {
        throw new Error('Param id must be a string');
      }

      await store.dispatch(fetchAllLocationsRegion({ id, locale: locale || 'en' }));
      return {
        props: {
          messages: (await import(`../../../lang/${locale}.json`)).default,
        },
      };
    },
);

export default LocationPage;
