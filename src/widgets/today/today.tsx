import React from 'react';
import { TodayDesc } from '../../entities/today-desc/TodayDesc';
import { Title } from '../../shared/ui/title/title';
import { Container } from '../../shared/ui/container/container';
import styles from './today.module.scss';
import { TodayMore } from '../../entities/today-more/TodayMore';

export const Today = () => {
  return (
    <div className={styles.wrapper}>
      <Title value="Today" />
      <TodayMore />
    </div>
  );
};
