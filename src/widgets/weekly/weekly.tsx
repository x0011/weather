import React from 'react';
import { WeeklyList } from '../../entities/weekly-list/WeeklyList';
import { Container } from '../../shared/ui/container/container';
import { Title } from '../../shared/ui/title/title';
import styles from './weekly.module.scss';

export const Weekly = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Title value="Forecast on 6days" />
        <WeeklyList />
      </Container>
    </div>
  );
};
