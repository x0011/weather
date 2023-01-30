import React, { PropsWithChildren } from 'react';
import styles from './title.module.scss';

interface ITitlte {
  value: string
  subheader?: string
}

export const Title:React.FC<ITitlte> = ({ value, subheader }) => {
  return (
    <h2 className={styles.title}>
      {value}
      <span className={styles.subheader}>{subheader}</span>
    </h2>
  );
};
