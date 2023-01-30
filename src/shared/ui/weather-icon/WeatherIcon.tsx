import React, { useEffect, useState } from 'react';
import styles from './WeatherIcon.module.scss';
import { ReactComponent as ClearIcon } from './assets/icons/day/0.svg';
import { ReactComponent as MostlyClearIcon } from './assets/icons/day/1.svg';
import { ReactComponent as PartlyCloudyIcon } from './assets/icons/day/2.svg';
import { ReactComponent as OvercastIcon } from './assets/icons/day/3.svg';
import { ReactComponent as FogIcon } from './assets/icons/day/45.svg';
import { ReactComponent as FogRimeIcon } from './assets/icons/day/48.svg';
import { ReactComponent as DrizzleLIcon } from './assets/icons/day/51.svg';
import { ReactComponent as DrizzleDIcon } from './assets/icons/day/55.svg';
import { ReactComponent as FreezingDrizzleLIcon } from './assets/icons/day/56.svg';
import { ReactComponent as FreezingDrizzleDIcon } from './assets/icons/day/57.svg';
import { ReactComponent as RainSIcon } from './assets/icons/day/61.svg';
import { ReactComponent as RainMIcon } from './assets/icons/day/63.svg';
import { ReactComponent as RainHIcon } from './assets/icons/day/65.svg';
import { ReactComponent as FreezingRainLIcon } from './assets/icons/day/66.svg';
import { ReactComponent as FreezingRainHIcon } from './assets/icons/day/67.svg';
import { ReactComponent as SnowSIcon } from './assets/icons/day/71.svg';
import { ReactComponent as SnowMIcon } from './assets/icons/day/73.svg';
import { ReactComponent as SnowHIcon } from './assets/icons/day/75.svg';
import { ReactComponent as SnowgrainsIcon } from './assets/icons/day/77.svg';
import { ReactComponent as RainshowerSIcon } from './assets/icons/day/80.svg';
import { ReactComponent as RainshowerMIcon } from './assets/icons/day/81.svg';
import { ReactComponent as RainshowerHIcon } from './assets/icons/day/82.svg';
import { ReactComponent as SnowshowersSIcon } from './assets/icons/day/85.svg';
import { ReactComponent as SnowshowersHIcon } from './assets/icons/day/86.svg';
import { ReactComponent as ThunderstormHailSIcon } from './assets/icons/day/95.svg';
import { ReactComponent as ThunderstormHailMIcon } from './assets/icons/day/96.svg';
import { ReactComponent as ThunderstormHailHIcon } from './assets/icons/day/99.svg';

export type Weathercodes = keyof typeof weatherCodes;

interface IWeatherIcon {
  weathercode: Weathercodes,
  className?: string
}

const weatherCodes = {
  0: ClearIcon,
  1: MostlyClearIcon,
  2: PartlyCloudyIcon,
  3: OvercastIcon,
  45: FogIcon,
  48: FogRimeIcon,
  51: DrizzleLIcon,
  55: DrizzleDIcon,
  56: FreezingDrizzleLIcon,
  57: FreezingDrizzleDIcon,
  61: RainSIcon,
  63: RainMIcon,
  65: RainHIcon,
  66: FreezingRainLIcon,
  67: FreezingRainHIcon,
  71: SnowSIcon,
  73: SnowMIcon,
  75: SnowHIcon,
  77: SnowgrainsIcon,
  80: RainshowerSIcon,
  81: RainshowerMIcon,
  82: RainshowerHIcon,
  85: SnowshowersSIcon,
  86: SnowshowersHIcon,
  95: ThunderstormHailSIcon,
  96: ThunderstormHailMIcon,
  99: ThunderstormHailHIcon,
};

export const WeatherIcon:React.FC<IWeatherIcon> = ({ weathercode, className }) => {
  const [Icon, setIcon] = useState<any | null>(null);
  useEffect(() => {
    setIcon(weatherCodes[weathercode]);
  }, [weathercode]);
  return (
    Icon && <Icon className={styles.test} />
  );
};
