/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { useTypedSelector } from '../../shared/model/store';
import { Temp } from '../../shared/ui/temp/temp';
import styles from './WeatherNow.module.scss';

function getYesterday(currentTime: string) {
  if (currentTime) {
    const date = new Date(currentTime);
    return date.setDate(date.getDate() - 1);
  }
  return null;
}

function getFeelslike(forecast: any[], currentDate: number | Date) {
  return forecast.filter((item) => {
    return new Date(item.time).getTime() === currentDate;
  })[0];
}

export const WeatherNow = () => {
  const { current, forecast } = useTypedSelector((state) => state.weather);
  const yesterday = current && getYesterday(current.time);
  const yesterdayFeelslike = (yesterday && forecast) && getFeelslike(forecast, yesterday);
  return (
    current && forecast && yesterday && yesterdayFeelslike
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
            <Temp value={Math.round(yesterdayFeelslike.feelslike)} showUnit={false} />
          </span>
        </div>
      )
      : null
  );
};
