import React from 'react';
import { useNavigate } from 'react-router';
import { RoundBtn } from '../../../shared/ui/roundbtn';
import { Header } from '../header';
import styles from './styles.module.scss';
import icon from './assets/points.svg';
import { useTypedSelector } from '../../../shared/model/store';
import { Title } from '../../../shared/ui/title/title';
import { ActionIcon } from '../../../shared/ui/icons';

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
        <Title
          value={location !== null ? location.name : ''}
          subheader={location !== null && date !== null
            ? `Up to date: ${Intl.DateTimeFormat('en-EN', {
              timeStyle: 'short',
            }).format(date)}` : ''}
        />
      )}
      action={
        <RoundBtn icon={<ActionIcon className={styles.icon} />} onClick={actionHandler} />
    }
    />
  );
};
