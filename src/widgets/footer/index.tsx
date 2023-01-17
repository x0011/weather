/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        Source data:
        {' '}
        <a href="https://open-meteo.com/">Weather API</a>
      </p>
      <p>Data as of January 23, 2021</p>
    </div>
  );
};
