import React from 'react';
import { useNavigate } from 'react-router';
import { Character } from '../../features/character/character';
import { Preloader } from '../../shared/ui/preloader';
import { RoundBtn } from '../../shared/ui/roundbtn';
import { About } from '../../widgets/about';
import { Footer } from '../../widgets/footer';
import { AboutHeader } from '../../widgets/header/about';
import { Header } from '../../widgets/header/header';
import styles from './styles.module.scss';

export const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <AboutHeader />
      <About />
      <Footer />
    </>
  );
};
