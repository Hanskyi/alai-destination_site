import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { homeSlice } from '@/features/Home/homeSlice';
import { articlesSlice } from '@/features/Articles/ArticlesSlice';
import { classificationsSlice } from '@/features/Classifications/ClassificationsSlice';
import { classificationSlice } from '@/features/Classification/ClassificationSlice';
import { locationsRegionSlice } from '@/features/LocationsRegion/LocationsRegionSlice';
import { toursSlice } from '@/features/FilteredTours/toursSlice';

const reducers = {
  [homeSlice.name]: homeSlice.reducer,
  [articlesSlice.name]: articlesSlice.reducer,
  [classificationsSlice.name]: classificationsSlice.reducer,
  [classificationSlice.name]: classificationSlice.reducer,
  [locationsRegionSlice.name]: locationsRegionSlice.reducer,
  [toursSlice.name]: toursSlice.reducer,
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
