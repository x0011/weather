import React from 'react';
import { Temp } from '../../shared/ui/temp/temp';
import styles from './TempDayItem.module.scss';
import sunImg from './assets/sun.svg';
import { Card } from '../../shared/ui/card/card';
import { WeatherIcon } from '../../shared/ui/weather-icon/WeatherIcon';

interface ITempDayItem {
  temp: number,
  date: string,
  weathercode: number,
}

export const TempDayItem: React.FC<ITempDayItem> = ({ temp, date, weathercode }) => {
  const dateTime = new Date(date);
  const time = `${dateTime.getHours()}:00`;
  return (
    <Card>
      <div className={styles.header}>
        <div className={styles.info}>
          <h3><Temp value={temp} /></h3>
          <span className={styles.time}>{time}</span>
        </div>
        {/* <img src={sunImg} alt="" /> */}
        <WeatherIcon className={styles.icon} weathercode={weathercode} />
      </div>
    </Card>
  );
};
