import React from 'react';
import styles from './styles.module.scss';

interface IAboutListItem {
  title: string | null,
  descr: string | null,
}

export const AboutListItem: React.FC<IAboutListItem> = ({ title, descr }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.descr}>{descr}</span>
    </div>
  );
};
