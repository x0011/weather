import React from 'react';
import { Header } from '../../widgets/header/header';
import { WeatherNow } from '../../entities/weather-now/WeatherNow';
import { Daily } from '../../entities/daily/daily';
import { Character } from '../../features/character/character';
import { Today } from '../../widgets/today/today';
import { Weekly } from '../../widgets/weekly/weekly';
import { RoundBtn } from '../../shared/ui/roundbtn';
import { HomeHeader } from '../../widgets/header/home';
import { Footer } from '../../widgets/footer';
import { PagePreloader } from '../../shared/hoc/pagepreloader';
import { useTypedSelector } from '../../shared/model/store';

const HomePage = () => (
  <>
    <HomeHeader />
    <Character />
    <WeatherNow />
    <Daily />
    <Today />
    <Weekly />
    <Footer />
  </>
);

export default PagePreloader(HomePage);
