import React from 'react';
import { useNavigate } from 'react-router';
import { RoundBtn } from '../../../shared/ui/roundbtn';
import { Header } from '../header';
import styles from './styles.module.scss';
import icon from './assets/points.svg';
import { useTypedSelector } from '../../../shared/model/store';
import { Title } from '../../../shared/ui/title/title';

export const HomeHeader = () => {
  const navigate = useNavigate();
  const { currentLocation: location, actualTime } = useTypedSelector((state) => state.settings);
  const date = actualTime !== null ? new Date(actualTime) : null;
  const actionHandler = () => {
    navigate('/settings');
    // console.log('null');
  };

  return (
    <Header
      title={(
        <Title value={location !== null ? location.name : ''}>
          {
          location !== null && date !== null
            ? (
              <span className={styles.location}>
                {
                  `Up to date: ${Intl.DateTimeFormat('en-EN', {
                    timeStyle: 'short',
                  }).format(date)}`
                }
              </span>
            )
            : null
        }
        </Title>
      )}
      action={
        <RoundBtn icon={icon} onClick={actionHandler} />
    }
    />
  );
};
