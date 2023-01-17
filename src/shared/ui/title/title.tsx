import React, { PropsWithChildren } from 'react';
import styles from './title.module.scss';

interface ITitlte extends PropsWithChildren {
  value: string
}

export const Title:React.FC<ITitlte> = ({ value, children }) => {
  return (
    <h2 className={styles.title}>
      {value}
      {children}
    </h2>
  );
};
