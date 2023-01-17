import React, { useEffect, useState } from 'react';

interface IWeatherIcon {
  weathercode: number,
  className?: string
}

export const WeatherIcon:React.FC<IWeatherIcon> = ({ weathercode, className }) => {
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    const iconl = import(`./assets/icons/day/${weathercode}.svg`);
    iconl.then((data) => {
      setIcon(data.default);
    });
  }, [weathercode]);
  return (
    <img className={className} src={icon != null ? icon : ''} alt="" />
  );
};
