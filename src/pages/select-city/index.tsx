import React from 'react';
import { CitySelectWidget } from '../../widgets/city-select';
import { SelectCityHeader } from '../../widgets/header/select-city';
import styles from './styles.module.scss';

export const SelectCityPage:React.FC = () => {
  return (
    <>
      <SelectCityHeader />
      <CitySelectWidget />
    </>
  );
};
