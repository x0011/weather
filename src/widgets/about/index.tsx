import React from 'react';
import { Character } from '../../features/character/character';
import { Container } from '../../shared/ui/container/container';
import { Preloader } from '../../shared/ui/preloader';
import styles from './styles.module.scss';
import { AboutListItem } from './ui/listitem';

function shuffle(array: typeof creators) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const creators = [
  <AboutListItem title="Illustration" descr="Sofia Kuzina" />,
  <AboutListItem title="Motion Design" descr="Olga Khil" />,
  <AboutListItem title="Developer" descr="Yaroslav Panteleev" />,
  <AboutListItem title="Product Design" descr="Artem Mukhammedzhanov" />,
];

export const About = () => {
  const usArr = shuffle(creators);
  return (
    <Container>
      <div className={styles.character}>
        <Preloader className={styles.animCharacter} viewBox="0 0 650 650" />
      </div>
      <div className={styles.team}>
        {
          creators.map((item) => item)
        }
      </div>
    </Container>
  );
};
