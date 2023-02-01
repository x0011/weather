import React from 'react';
import { WeatherNow } from '../../entities/weather-now/WeatherNow';
import { Daily } from '../../entities/daily/daily';
import { Character } from '../../features/character/character';
import { Today } from '../../widgets/today/today';
import { Weekly } from '../../widgets/weekly/weekly';
import { HomeHeader } from '../../widgets/header/home';
import { Footer } from '../../widgets/footer';
import { PagePreloader } from '../../shared/hoc/pagepreloader';
import styles from './styles.module.scss';
import { Container } from '../../shared/ui/container/container';

const HomePage = () => (
  <>
    <HomeHeader />
    <Character className={styles.characterWrapper} />
    <WeatherNow />
    <Daily />
    <Container styles={styles.description}>
      <Today />
      <Weekly />
    </Container>
    <Footer />
  </>
);

export default PagePreloader(HomePage);
