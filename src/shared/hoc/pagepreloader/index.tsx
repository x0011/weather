import React, { useEffect } from 'react';
import { useTypedSelector } from '../../model/store';

export const PagePreloader = (component: any) => {
  const HOC:React.FC = () => {
    const { status } = useTypedSelector((state) => state.weather);
    console.log(status);
    return component();
  };
  return HOC;
};
