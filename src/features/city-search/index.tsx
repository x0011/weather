import React, { useEffect, useState } from 'react';
import { Units, WeatherV2 } from '../../shared/api/weather/weather-v2';
import { CitySelector } from '../city-selector';
import styles from './styles.module.scss';

export const CitySearch: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [results, setResults] = useState<null | {}[]>(null);
  const weatherApi = new WeatherV2(Units.C);
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  useEffect(() => {
    const coincidences = weatherApi.getLocation(city);
    coincidences.then((data) => {
      setResults(data);
    });
  }, [city]);

  return (
    <>
      <input
        className={styles.city}
        type="text"
        value={city}
        onChange={inputHandler}
        placeholder="Start typing city name"
      />
      {
        results != null
          ? <CitySelector data={results} />
          : null
      }
    </>
  );
};
