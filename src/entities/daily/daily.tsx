import React from 'react';
import { useTypedSelector } from '../../shared/model/store';
import { TempDayItem } from '../day-temp-item/TempDayItem';
import styles from './daily.module.scss';

export const Daily = () => {
  const { forecast } = useTypedSelector((state) => state.weather);
  const currentDate = new Date();
  const daily: [] = forecast != null
    ? forecast.filter((item: any) => {
      const { time: itemTime } = item;
      return new Date(itemTime).getDate() === currentDate.getDate();
    })
    : [];
  const currentHourIndex = daily.findIndex((item: any) => (
    new Date(item.time).getHours() === currentDate.getHours()
  ));
  const dailyforecast:any = daily.slice(currentHourIndex);
  return (
    <div className={styles.wrapper}>
      {
        dailyforecast.map((item: any) => (
          <TempDayItem
            weathercode={item.weathercode}
            key={item.time}
            temp={Math.round(item.temp)}
            date={item.time}
          />
        ))
      }
    </div>
  );
};
