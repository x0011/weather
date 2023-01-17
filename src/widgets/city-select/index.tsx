import React from 'react';
import { CitySearch } from '../../features/city-search';
import { Container } from '../../shared/ui/container/container';
import styles from './styles.module.scss';

export const CitySelectWidget = () => {
  return (
    <Container>
      <CitySearch />
      <div className={styles.findMe} />
    </Container>
  );
};
