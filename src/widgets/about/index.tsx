import React from 'react';
import { Character } from '../../features/character/character';
import { Container } from '../../shared/ui/container/container';
import styles from './styles.module.scss';
import { AboutListItem } from './ui/listitem';

export const About = () => {
  return (
    <Container>
      <div className={styles.character}>
        <Character />
      </div>
      <div className={styles.team}>
        <AboutListItem title="Developer" descr="Yaroslav Panteleev" />
        <AboutListItem title="Product Design" descr="Artem Mukhammedzhanov" />
        <AboutListItem title="Illustration" descr="Sofia Kuzina" />
        <AboutListItem title="Motion Design" descr="Olga Khil" />
      </div>
    </Container>
  );
};
