import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { settingsReducer } from './reducers/settings';
import { WeatherReducer } from './reducers/weather';

export const store = configureStore({
  reducer: {
    weather: WeatherReducer.reducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
