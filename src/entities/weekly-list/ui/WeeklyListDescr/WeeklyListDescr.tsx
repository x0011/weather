import React from 'react';
import styles from './WeeklyListDescr.module.scss';
import sunImg from './assets/sun.svg';
import { Temp } from '../../../../shared/ui/temp/temp';
import { Weathercodes, WeatherIcon } from '../../../../shared/ui/weather-icon/WeatherIcon';

export interface IWeeklyListDescr {
  tempDay: number,
  tempNight: number,
  weathercode: Weathercodes,
  className?: string,
}

export const WeeklyListDescr: React.FC<IWeeklyListDescr> = (
  {
    tempDay, tempNight, weathercode, className,
  },
) => {
  return (
    <div className={[styles.wrapper, className].join(' ')}>
      <WeatherIcon className={styles.icon} weathercode={weathercode} />
      <div className={styles.temp}>
        <span className={styles.tempDay}>
          <Temp value={tempDay} />
        </span>
        <span className={styles.tempNight}>
          <Temp value={`${tempNight}`} />
        </span>
      </div>
    </div>
  );
};
