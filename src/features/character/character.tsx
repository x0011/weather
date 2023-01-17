import React, { useEffect, useState } from 'react';
import styles from './character.module.scss';
import sunnyImg from './assets/img/sunny.svg';
import { useTypedSelector } from '../../shared/model/store';
import { Container } from '../../shared/ui/container/container';

const characterCodes = [
  {
    codes: [0],
    img: './assets/img/sunny.svg',
    nightImg: './assets/img/night/clear-sky.svg',
  },
  {
    codes: [56, 57, 61, 63, 65, 66, 67],
    img: './assets/img/rain.svg',
    nightImg: './assets/img/rain.svg',
  },
  {
    codes: [71, 73, 75],
    img: './assets/img/snow.svg',
    nightImg: './assets/img/snow.svg',
  },
  {
    codes: [95, 96, 99],
    img: './assets/img/thunderstorm.svg',
    nightImg: './assets/img/thunderstorm.svg',
  },
  {
    codes: [80, 81, 82],
    img: './assets/img/rainshower.svg',
    nightImg: './assets/img/rainshower.svg',
  },
  {
    codes: [45, 45],
    img: './assets/img/fog.svg',
    nightImg: './assets/img/fog.svg',
  },
  {
    codes: [51, 53, 55],
    img: './assets/img/drizzle.svg',
    nightImg: './assets/img/night/drizzle.svg',
  },
  {
    codes: [85, 86, 77],
    img: './assets/img/heavysnow.svg',
    nightImg: './assets/img/heavysnow.svg',
  },
  {
    codes: [3],
    img: './assets/img/overcast.svg',
    nightImg: './assets/img/overcast.svg',
  },
  {
    codes: [1],
    img: './assets/img/mostlyclear.svg',
    nightImg: './assets/img/night/mostlyclear.svg',
  },
  {
    codes: [2],
    img: './assets/img/partlycloudy.svg',
    nightImg: './assets/img/night/partlycloudy.svg',
  },
];

const getImgByCode = (code: number) => {
  const time = new Date().getHours();
  const imgLink = characterCodes.filter((img) => {
    const { codes } = img;
    return codes.indexOf(code) !== -1;
  })[0];
  return time > 20 ? imgLink.nightImg : imgLink.img;
};

export const Character:React.FC = () => {
  const [img, setImg] = useState<string | null>(null);
  const { current } = useTypedSelector((state) => state.weather);
  const weathercode = current ? current.weathercode : null;
  useEffect(() => {
    if (current) {
      const imgLink = getImgByCode(current.weathercode);
      const characterImg = import(`${imgLink}`);
      characterImg.then((data) => {
        setImg(data.default);
      });
    }
  }, [weathercode]);
  return (
    <Container>
      <img className={styles.img} src={img || ''} alt="" />
    </Container>
  );
};
