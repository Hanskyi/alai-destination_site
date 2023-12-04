import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { homeSlice } from '@/features/Home/homeSlice';
import { articlesSlice } from '@/features/Articles/ArticlesSlice';
import { headerFooterSlice } from '@/features/HeaderFooter/headerFooterSlice';
import { classificationsSlice } from '@/features/Classifications/ClassificationsSlice';
import { locationsRegionSlice } from '@/features/LocationsRegion/LocationsRegionSlice';

const reducers = {
  [homeSlice.name]: homeSlice.reducer,
  [articlesSlice.name]: articlesSlice.reducer,
  [classificationsSlice.name]: classificationsSlice.reducer,
  [headerFooterSlice.name]: headerFooterSlice.reducer,
  [locationsRegionSlice.name]: locationsRegionSlice.reducer,
};

const reducer = combineReducers(reducers);

const makeStore = () =>
  configureStore({
    reducer,
    devTools: true,
  });

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = ReturnType<RootStore['dispatch']>;
export const wrapper = createWrapper<RootStore>(makeStore);
