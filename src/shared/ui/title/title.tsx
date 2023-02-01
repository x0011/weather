import React, { PropsWithChildren } from 'react';
import styles from './title.module.scss';

interface ITitlte {
  value: string
  subheader?: string,
  className?: string,
  spaces?: boolean
}

export const Title:React.FC<ITitlte> = ({ value, subheader, spaces }) => {
  return (
    <h2 className={[styles.title, spaces && styles.cleanSpaces].join(' ')}>
      {value}
      <span className={styles.subheader}>{subheader}</span>
    </h2>
  );
};
