import React from 'react';
import { useTypedSelector } from '../../shared/model/store';
import { Container } from '../../shared/ui/container/container';
import { TempDayItem } from '../day-temp-item/TempDayItem';
import styles from './daily.module.scss';

function getTomorrow(currentTime: string) {
  if (currentTime) {
    const date = new Date(currentTime);
    return date.setDate(date.getDate() + 1);
  }
  return null;
}

export const Daily = () => {
  const { forecast, current } = useTypedSelector((state) => state.weather);
  const currentDateTest = current && current.time;
  const tomorrow = currentDateTest && getTomorrow(currentDateTest);
  const daily: [] = forecast != null
    ? forecast.filter((item: any) => {
      const { time: itemTime } = item;
      const date = new Date(itemTime);

      if (currentDateTest) {
        const currentTime = new Date(currentDateTest);
        if (date.getDate() === currentTime.getDate()) {
          return date.getHours() >= currentTime.getHours();
        }
        if (tomorrow) {
          const tomorrowTime = new Date(tomorrow);
          return date.getDate() === tomorrowTime.getDate();
        }
      }
      return false;
    })
    : [];

  return (
    <Container styles={styles.fullWidth}>
      <div className={styles.wrapper}>
        {
        daily.map((item: any) => (
          <TempDayItem
            weathercode={item.weathercode}
            key={item.time}
            temp={Math.round(item.temp)}
            date={item.time}
          />
        ))
      }
      </div>
    </Container>
  );
};
