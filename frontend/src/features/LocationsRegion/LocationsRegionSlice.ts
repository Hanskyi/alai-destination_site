import { ILocationsRegion } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';
import { fetchAllLocationsRegion } from '@/features/LocationsRegion/LocationsRegionThunk';

interface LocationsRegionState {
  locationsRegion: ILocationsRegion | null;
  fetchLoading: boolean;
  error: boolean;
}

const initialState: LocationsRegionState = {
  locationsRegion: null,
  fetchLoading: false,
  error: false,
};

export const locationsRegionSlice = createSlice({
  name: 'locationsRegion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, action) => {
        return { ...state, ...action.payload.locationsRegion };
      },
    );

    builder.addCase(fetchAllLocationsRegion.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(
      fetchAllLocationsRegion.fulfilled,
      (state, { payload: locationsRegionData }) => {
        state.fetchLoading = false;
        state.locationsRegion = locationsRegionData.data;
      },
    );
    builder.addCase(fetchAllLocationsRegion.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const selectLocationsRegion = (state: RootState) => state.locationsRegion.locationsRegion;
