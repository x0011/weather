import React, { useEffect } from 'react';
import {
  Navigate, Route, Routes, useLocation, useNavigate,
} from 'react-router';
import { AboutPage } from '../pages/about';
import HomePage from '../pages/home/homePage';
import { SelectCityPage } from '../pages/select-city';
import { SettingsPage } from '../pages/settings';
import { Units, WeatherV2 } from '../shared/api/weather/weather-v2';
import { useAppDispatch, useTypedSelector } from '../shared/model/store';
import { setActualtime } from '../shared/model/store/actions/settings';
import { FetchCurrentWeather } from '../shared/model/store/reducers/weather';

export const App = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const location = useLocation();
  const {
    weather: {
      status,
    },
    settings: {
      currentLocation,
      currentUnit,
    },
  } = useTypedSelector((state) => state);
  useEffect(() => {
    const coordinates = currentLocation !== null
      ? {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      }
      : null;
    if (coordinates != null) {
      dispatch(FetchCurrentWeather({
        coordinates,
        unit: currentUnit,
      }));
      dispatch(setActualtime(Date().toString()));
    }
  }, [currentLocation, currentUnit]);
  // useEffect(() => {
  //   if (location.pathname !== '/select-city' && currentLocation === null) {
  //     nav('/select-city');
  //   }
  // });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={currentLocation ? <HomePage /> : <SelectCityPage />} />
        <Route path="/settings" element={currentLocation ? <SettingsPage /> : <SelectCityPage />} />
        <Route path="/select-city" element={<SelectCityPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};
