import React from 'react';
import { useNavigate } from 'react-router';
import { useTypedSelector } from '../../../shared/model/store';
import { Container } from '../../../shared/ui/container/container';
import { RoundBtn } from '../../../shared/ui/roundbtn';
import { Title } from '../../../shared/ui/title/title';
import styles from './styles.module.scss';
import closeIcon from './assets/icons/close.svg';

export const SelectCityHeader = () => {
  const { currentLocation: location } = useTypedSelector((state) => state.settings);
  const nav = useNavigate();
  const closeBtnHandler = () => {
    nav('/');
  };
  return (
    <Container styles={styles.wrapper}>
      <Title value="Select city">
        {
          location !== null
            ? (
              <span className={styles.location}>{`Current location: ${location.name}`}</span>
            )
            : null
        }
      </Title>
      {
        location !== null
          ? <RoundBtn icon={closeIcon} onClick={closeBtnHandler} />
          : null
      }
    </Container>
  );
};
