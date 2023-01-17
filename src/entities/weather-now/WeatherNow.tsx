/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { useTypedSelector } from '../../shared/model/store';
import { Temp } from '../../shared/ui/temp/temp';
import styles from './WeatherNow.module.scss';

export const WeatherNow = () => {
  const { current, forecast } = useTypedSelector((state) => state.weather);
  return (
    current && forecast
      ? (
        <div className={styles.wrapper}>
          <h2 className={styles.temp}>
            <Temp value={`${Math.round(Number(current.temperature))}`} showUnit />
          </h2>
          <span className={styles.condition}>{current.conditiontext}</span>
          <span className={styles.feelsLike}>
            Feels like
            {' '}
            <Temp value={`${Math.round(current.feelslike)}`} />
            . Yesterday it was
            {' '}
            <Temp value="-5" showUnit={false} />
          </span>
        </div>
      )
      : null
  );
};
