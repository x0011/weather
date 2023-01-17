import {
  createAsyncThunk, createSlice,
} from '@reduxjs/toolkit';
import { WeatherV2, Units, ICoordinates } from '../../../../api/weather/weather-v2';

interface ICurrentWeather {
  temperature: number,
  windspeed: number,
  weathercode: number,
  time: string,
  winddirection: number,
  pressure: number,
  humidity: number,
  feelslike: number,
  conditiontext: number,
  surfacepressure: number,
  dewpoint: number,
}

interface IDailyWeather {
  temperature_2m_max: number[],
  temperature_2m_min: number[],
  time: string[],
  weathercode: number[],
}

interface IWeatherState {
  current: ICurrentWeather | null,
  forecast: any | null,
  daily: IDailyWeather | null,
  status: boolean
}

interface IRequestData {
  coordinates: ICoordinates,
  unit: Units
}

const initialState: IWeatherState = {
  current: null,
  forecast: null,
  daily: null,
  status: false,
};

export const FetchCurrentWeather = createAsyncThunk(
  'weather/fetchStatus',
  async (requestData: IRequestData) => {
    const weatherApi = new WeatherV2(requestData.unit);
    const result = await weatherApi.getCurrent(requestData.coordinates);
    return result;
  },
);

export const WeatherReducer = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCurrentWeather.fulfilled, (state, action) => {
      state.current = action.payload.current;
      state.forecast = action.payload.hourlyforecast;
      state.daily = action.payload.daily;
      state.status = true;
    });
    builder.addCase(FetchCurrentWeather.pending, (state) => {
      state.status = false;
    });
    builder.addCase(FetchCurrentWeather.rejected, (state) => {
      state.status = false;
    });
  },
});

// export const { weatherFecthed, weatherFetch } = WeatherReducer.actions;
