import React from 'react';
import styles from './actionMenu.module.scss';
import pointsImg from './assets/points.svg';

export const ActionMenu = () => {
  return (
    <button type="button" className={styles.wrapper}>
      <img src={pointsImg} alt="" />
    </button>
  );
};
