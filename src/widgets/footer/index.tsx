/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTypedSelector } from '../../shared/model/store';
import styles from './styles.module.scss';

export const Footer = () => {
  const { actualTime, currentLocation } = useTypedSelector((state) => state.settings);
  return (
    <div className={styles.wrapper}>
      <p>
        Source data:
        {' '}
        <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Weather API</a>
      </p>
      <p>
        {actualTime && currentLocation
          ? `${Intl.DateTimeFormat('en-EN', {
            dateStyle: 'medium',
            timeStyle: 'short',
            timeZone: currentLocation.timezone,
          }).format(new Date(actualTime))}` : ''}
      </p>
    </div>
  );
};
