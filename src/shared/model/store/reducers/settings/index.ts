import { createReducer } from '@reduxjs/toolkit';
import { Units } from '../../../../api/weather/weather-v2';
import {
  setActualtime, setCurrentLocation, setCurrentUnit, setSearchText, setTheme,
} from '../../actions/settings';

export enum Themes {
  'dark', 'light', 'auto',
}

const local = {
  unit: localStorage.getItem('unit') as keyof typeof Units,
  theme: localStorage.getItem('theme'),
  location: localStorage.getItem('location'),
};

interface ISettingsReducer {
  currentLocation: any | null,
  currentUnit: Units,
  searchInput: string | null,
  actualTime: string | null,
  currentTheme: number
}

const initialState:ISettingsReducer = {
  currentLocation: local.location !== null ? JSON.parse(local.location) : null,
  currentUnit: Units[local.unit] || Units.C,
  searchInput: null,
  actualTime: null,
  currentTheme: Number(localStorage.getItem('theme')) && Themes.light,
};

export const settingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentLocation, (state, action) => {
      state.currentLocation = action.payload;
    })
    .addCase(setCurrentUnit, (state, action) => {
      state.currentUnit = action.payload;
    })
    .addCase(setSearchText, (state, action) => {
      state.searchInput = action.payload;
    })
    .addCase(setActualtime, (state, action) => {
      state.actualTime = action.payload;
    })
    .addCase(setTheme, (state, action) => {
      state.currentTheme = action.payload;
    });
});
