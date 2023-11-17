import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const reducers = {};

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
