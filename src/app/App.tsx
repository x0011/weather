/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prefer-destructuring */
import { useEffect } from 'react';
import {
  Route, Routes,
} from 'react-router';
import { isNight } from '../features/character/character';
import { AboutPage } from '../pages/about';
import HomePage from '../pages/home/homePage';
import { SelectCityPage } from '../pages/select-city';
import { SettingsPage } from '../pages/settings';
import { ImageProvider } from '../shared/lib/imgpreloader';
import { useAppDispatch, useTypedSelector } from '../shared/model/store';
import { setActualtime } from '../shared/model/store/actions/settings';
import { Themes } from '../shared/model/store/reducers/settings';
import { FetchCurrentWeather } from '../shared/model/store/reducers/weather';

const setTheme = () => {
  const { current } = useTypedSelector((state) => state.weather);
  const { currentTheme } = useTypedSelector((state) => state.settings);
  const { dataset } = document.documentElement;
  if (Themes[currentTheme] === 'auto' && current) {
    if (isNight(current.time, current.sunset, current.sunrise)) {
      dataset.theme = Themes[0];
    } else {
      dataset.theme = Themes[1];
    }
  } else {
    dataset.theme = Themes[currentTheme];
  }
};

export const App = () => {
  // document.documentElement.dataset.theme = Themes[1];
  setTheme();
  const dispatch = useAppDispatch();
  const {
    settings: {
      currentLocation,
      currentUnit,
    },
  } = useTypedSelector((state) => state);
  useEffect(() => {
    if (currentLocation != null) {
      dispatch(FetchCurrentWeather({
        currentLocation,
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
