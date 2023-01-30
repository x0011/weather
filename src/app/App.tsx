import React, { useEffect } from 'react';
import {
  Navigate, Route, Routes, useLocation, useNavigate,
} from 'react-router';
import { AboutPage } from '../pages/about';
import HomePage from '../pages/home/homePage';
import { SelectCityPage } from '../pages/select-city';
import { SettingsPage } from '../pages/settings';
import { Units } from '../shared/api/weather/weather-v2';
import { ImageProvider } from '../shared/lib/imgpreloader';
import { useAppDispatch, useTypedSelector } from '../shared/model/store';
import { setActualtime } from '../shared/model/store/actions/settings';
import { Themes } from '../shared/model/store/reducers/settings';
import { FetchCurrentWeather } from '../shared/model/store/reducers/weather';

export const App = () => {
  // eslint-disable-next-line prefer-destructuring
  const { currentTheme } = useTypedSelector((state) => state.settings);
  document.documentElement.dataset.theme = Themes[currentTheme];
  const dispatch = useAppDispatch();
  const {
    settings: {
      currentLocation,
      currentUnit,
    },
  } = useTypedSelector((state) => state);
  useEffect(() => {
    console.log(currentLocation);
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
  return (
    <div className="App">
      <ImageProvider value={[]}>
        <Routes>
          <Route path="/" element={currentLocation ? <HomePage /> : <SelectCityPage />} />
          <Route path="/settings" element={currentLocation ? <SettingsPage /> : <SelectCityPage />} />
          <Route path="/select-city" element={<SelectCityPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </ImageProvider>
    </div>
  );
};
