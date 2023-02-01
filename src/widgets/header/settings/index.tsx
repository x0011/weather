import React from 'react';
import { useNavigate } from 'react-router';
import { RoundBtn } from '../../../shared/ui/roundbtn';
import { Header } from '../header';
import styles from './styles.module.scss';
import actionIcon from './assets/icons/arrow-left.svg';
import { BackIcon } from '../../../shared/ui/icons';

export const SettingsHeader = () => {
  const nav = useNavigate();
  const actionHandler = () => {
    nav('/');
  };
  return (
    <Header
      title="Settings"
      action={
        <RoundBtn icon={<BackIcon className={styles.actionIcon} />} onClick={actionHandler} />
    }
    />
  );
};
