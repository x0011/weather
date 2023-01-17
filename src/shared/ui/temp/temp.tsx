import React from 'react';
import { Units } from '../../api/weather/weather-v2';
import { useTypedSelector } from '../../model/store';
import styles from './temp.module.scss';

interface ITempProps {
  value: string | number,
  unitToggle?: boolean
  showUnit?: boolean
}

export const Temp:React.FC<ITempProps> = ({ value, showUnit = false }) => {
  const { currentUnit } = useTypedSelector((state) => state.settings);
  // const unitSymbol = (Object.keys(Units) as Array<keyof typeof Units>)
  //   .filter((item) => item === Units[item]);
  // console.log(Object.keys(Units).map((item) => ));
  return (
    <>
      {value}
      {showUnit
        ? <span className={styles.unit}>{currentUnit.slice(0, 1).toUpperCase()}</span>
        : <span className={styles.deg} />}
    </>

  );
};
