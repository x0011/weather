import { createReducer } from '@reduxjs/toolkit';
import { Units } from '../../../../api/weather/weather-v2';
import {
  setActualtime, setCurrentLocation, setCurrentUnit, setSearchText,
} from '../../actions/settings';

interface ISettingsReducer {
  currentLocation: any | null,
  currentUnit: Units,
  searchInput: string | null,
  actualTime: string | null
}

const initialState:ISettingsReducer = {
  currentLocation: null,
  currentUnit: Units.C,
  searchInput: null,
  actualTime: null,
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
    });
});
