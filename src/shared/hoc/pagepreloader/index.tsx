import React, { useEffect } from 'react';
import { useTypedSelector } from '../../model/store';
import { Preloader } from '../../ui/preloader';

export const PagePreloader = (component: any) => {
  const HOC:React.FC = () => {
    const { status } = useTypedSelector((state) => state.weather);
    return status ? component() : <Preloader />;
  };
  return HOC;
};
