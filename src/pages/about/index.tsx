import React from 'react';
import { useNavigate } from 'react-router';
import { Character } from '../../features/character/character';
import { RoundBtn } from '../../shared/ui/roundbtn';
import { About } from '../../widgets/about';
import { Header } from '../../widgets/header/header';

export const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        title="About us"
        action={
          <RoundBtn icon="back" onClick={() => { navigate('/'); }} />
        }
      />
      <About />
    </>
  );
};
