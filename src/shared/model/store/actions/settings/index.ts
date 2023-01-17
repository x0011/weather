import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { Units } from '../../../../api/weather/weather-v2';

export const setCurrentLocation = createAction<string>('setCurrentLocation');
export const setCurrentUnit = createAction<Units>('setCurrentUnit');
export const setSearchText = createAction<string>('setSearchText');
export const setSelectData = createAction<any>('setSelectData');
export const setActualtime = createAction<any>('setActualtime');
