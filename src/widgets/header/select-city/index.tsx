import React from 'react';
import { useNavigate } from 'react-router';
import { useTypedSelector } from '../../../shared/model/store';
import { Container } from '../../../shared/ui/container/container';
import { RoundBtn } from '../../../shared/ui/roundbtn';
import { Title } from '../../../shared/ui/title/title';
import styles from './styles.module.scss';
import closeIcon from './assets/icons/close.svg';
import { CloseIcon } from '../../../shared/ui/icons';

export const SelectCityHeader = () => {
  const { currentLocation: location } = useTypedSelector((state) => state.settings);
  const nav = useNavigate();
  const closeBtnHandler = () => {
    nav('/');
  };
  return (
    <Container styles={styles.wrapper}>
      <Title
        value="Select city"
        subheader={location && `Current location: ${location.name}`}
      />
      {
        location !== null
          ? (
            <RoundBtn
              icon={<CloseIcon className={styles.actionIcon} />}
              onClick={closeBtnHandler}
            />
          )
          : null
      }
    </Container>
  );
};
