import { createAction } from '@reduxjs/toolkit';

export const fetchWeather = createAction('FETCH_WEATHER');
export const fetcedWeather = createAction('FETCHED_WEATHER');
export const fetchWeaterError = createAction('FETCH_WEATHER_ERROR');
