import React, { useEffect, useState } from 'react';
import styles from './character.module.scss';
import { useTypedSelector } from '../../shared/model/store';
import { Container } from '../../shared/ui/container/container';
import { ReactComponent as SunnySVG } from './assets/img/sunny.svg';
import { ReactComponent as SunnyNightSVG } from './assets/img/night/clear-sky.svg';
import { ReactComponent as RainSVG } from './assets/img/rain.svg';
import { ReactComponent as SnowSVG } from './assets/img/snow.svg';
import { ReactComponent as ThunderstormSVG } from './assets/img/thunderstorm.svg';
import { ReactComponent as RainshowerSVG } from './assets/img/rainshower.svg';
import { ReactComponent as FogSVG } from './assets/img/fog.svg';
import { ReactComponent as DrizzleSVG } from './assets/img/drizzle.svg';
import { ReactComponent as DrizzleNightSVG } from './assets/img/night/drizzle.svg';
import { ReactComponent as HeavysnowSVG } from './assets/img/heavysnow.svg';
import { ReactComponent as OvercastSVG } from './assets/img/overcast.svg';
import { ReactComponent as PartlycloudySVG } from './assets/img/partlycloudy.svg';
import { ReactComponent as PartlycloudyNightSVG } from './assets/img/night/partlycloudy.svg';
import { ReactComponent as MostlyclearSVG } from './assets/img/mostlyclear.svg';
import { ReactComponent as MostlyclearNightSVG } from './assets/img/night/mostlyclear.svg';

const characterCodes = [
  {
    codes: [0],
    img: SunnySVG,
    nightImg: SunnyNightSVG,
  },
  {
    codes: [56, 57, 61, 63, 65, 66, 67],
    img: RainSVG,
    nightImg: RainSVG,
  },
  {
    codes: [71, 73, 75],
    img: SnowSVG,
    nightImg: SnowSVG,
  },
  {
    codes: [95, 96, 99],
    img: ThunderstormSVG,
    nightImg: ThunderstormSVG,
  },
  {
    codes: [80, 81, 82],
    img: RainshowerSVG,
    nightImg: RainshowerSVG,
  },
  {
    codes: [45, 45],
    img: FogSVG,
    nightImg: FogSVG,
  },
  {
    codes: [51, 53, 55],
    img: DrizzleSVG,
    nightImg: DrizzleNightSVG,
  },
  {
    codes: [85, 86, 77],
    img: HeavysnowSVG,
    nightImg: HeavysnowSVG,
  },
  {
    codes: [3],
    img: OvercastSVG,
    nightImg: OvercastSVG,
  },
  {
    codes: [1],
    img: MostlyclearSVG,
    nightImg: MostlyclearNightSVG,
  },
  {
    codes: [2],
    img: PartlycloudySVG,
    nightImg: PartlycloudyNightSVG,
  },
];

export const isSunset = (currentTime: string, sunsetTime:string) => {
  const current = (new Date(currentTime).getTime()) / 1000;
  const sunset = (new Date(sunsetTime).getTime()) / 1000;
  return current > sunset;
};

const getImgByCode = (code: number, currentTime: string, sunsetTime:string) => {
  const time = new Date().getHours();
  const imgLink = characterCodes.filter((img) => {
    const { codes } = img;
    return codes.indexOf(code) !== -1;
  })[0];
  return isSunset(currentTime, sunsetTime) || time < 8 ? imgLink.nightImg : imgLink.img;
};

interface ICharacter {
  className?: string,
}

export const Character:React.FC<ICharacter> = ({ className }) => {
  // eslint-disable-next-line max-len
  const [CharacterImg, setCharacter] = useState < any | null>(null);
  const { current } = useTypedSelector((state) => state.weather);
  const weathercode = current ? current.weathercode : null;
  useEffect(() => {
    if (current) {
      const imgLink = getImgByCode(current.weathercode, current.time, current.sunset);
      setCharacter(imgLink);
    }
  }, [weathercode]);
  return (
    CharacterImg && <CharacterImg className={[styles.character, className].join(' ')} />
  );
};
