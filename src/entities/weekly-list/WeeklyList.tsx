import React from 'react';
import { conditions } from '../../shared/lib/weather-codes';
import { useTypedSelector } from '../../shared/model/store';
import { Card } from '../../shared/ui/card/card';
import { ItemDivider } from '../../shared/ui/item-divider/ItemDivider';
import { ListItem } from '../../shared/ui/list-item/ListItem';
import { Weathercodes } from '../../shared/ui/weather-icon/WeatherIcon';
import { WeeklyListDescr } from './ui/WeeklyListDescr/WeeklyListDescr';

export const WeeklyList = () => {
  const {
    daily,
  } = useTypedSelector((state) => state.weather);
  const weekdayFormat = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
  const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' });
  return (
    <Card>
      {
        daily !== null
          ? daily.time.map((item, count, row) => {
            if (new Date().getTime() < new Date(item).getTime()) {
              return (
                <div key={item}>
                  <ListItem
                    title={weekdayFormat.format(new Date(item))}
                    descr={dateFormat.format(new Date(item))}
                    value={(
                      <WeeklyListDescr
                        weathercode={daily.weathercode[count] as Weathercodes}
                        tempDay={Math.round(daily.temperature_2m_max[count])}
                        tempNight={Math.round(daily.temperature_2m_min[count])}
                      />
                    )}
                  />
                  {row.length !== count + 1 ? <ItemDivider /> : null }
                </div>
              );
            }
            return null;
          })
          : null
      }
      {/* {
          conditions.map((item, count, row) => {
            console.log(item.weathercode);
            return (
              <div key={new Date().getTime() + Math.random()}>
                <ListItem
                  title={item.condition}
                  descr="Test description"
                  value={(
                    <WeeklyListDescr
                      weathercode={item.weathercode}
                      tempDay={12}
                      tempNight={15}
                    />
                    )}
                />
                {row.length !== count + 1 ? <ItemDivider /> : null }
              </div>
            );
          })
      } */}
    </Card>
  );
};
