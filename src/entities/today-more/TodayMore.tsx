import React from 'react';
import { useTypedSelector } from '../../shared/model/store';
import { Card } from '../../shared/ui/card/card';
import { ItemDivider } from '../../shared/ui/item-divider/ItemDivider';
import { ListItem } from '../../shared/ui/list-item/ListItem';

const getWindDirection = (deg: number) => {
  const directions = [
    'North',
    'North-East',
    'East',
    'South-East',
    'South',
    'South-West',
    'West',
    'North-West',
  ];
  // eslint-disable-next-line no-cond-assign
  const index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
  return directions[index];
};

export const TodayMore = () => {
  const { current } = useTypedSelector((state) => state.weather);
  return (
    current != null
      ? (
        <Card>
          <ListItem title="Wind" descr={`${getWindDirection(current?.winddirection)} direction`} value={`${Math.round(Number(current?.windspeed))} m/s`} />
          <ItemDivider />
          <ListItem title="Humidity" descr={`Dew point: ${Math.round(current?.dewpoint)}`} value={`${current?.humidity}%`} />
          <ItemDivider />
          <ListItem title="Pressure" descr="Within normal limits" value={`${Math.round(Number(current?.pressure))} mb.`} />
        </Card>
      )
      : null
  );
};
