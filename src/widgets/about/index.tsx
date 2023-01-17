import React from 'react';
import { Character } from '../../features/character/character';
import { Container } from '../../shared/ui/container/container';
import { RoundBtn } from '../../shared/ui/roundbtn';
import { Header } from '../header/header';
import styles from './styles.module.scss';
import { AboutListItem } from './ui/listitem';

export const About = () => {
  return (
    <Container>
      <Character />
      <AboutListItem title="Developer" descr="Yaroslav Panteleev" />
      <AboutListItem title="Product Design" descr="Artem Mukhammedzhanov" />
      <AboutListItem title="Illustration" descr="Sofia Kuzina" />
      <AboutListItem title="Motion Design" descr="Olga Khil" />
    </Container>
  );
};
