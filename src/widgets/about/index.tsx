import React from 'react';
import { WeatherNow } from '../../entities/weather-now/WeatherNow';
import { Character } from '../../features/character/character';
import { Container } from '../../shared/ui/container/container';
import { Preloader } from '../../shared/ui/preloader';
import { RoundBtn } from '../../shared/ui/roundbtn';
import { Header } from '../header/header';
import styles from './styles.module.scss';
import { AboutListItem } from './ui/listitem';

export const About = () => {
  return (
    <Container>
      <Character />
      <div className={styles.team}>
        <AboutListItem title="Developer" descr="Yaroslav Panteleev" />
        <AboutListItem title="Product Design" descr="Artem Mukhammedzhanov" />
        <AboutListItem title="Illustration" descr="Sofia Kuzina" />
        <AboutListItem title="Motion Design" descr="Olga Khil" />
      </div>
    </Container>
  );
};
