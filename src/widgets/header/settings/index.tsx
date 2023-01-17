import React from 'react';
import { useNavigate } from 'react-router';
import { RoundBtn } from '../../../shared/ui/roundbtn';
import { Header } from '../header';
import styles from './styles.module.scss';
import actionIcon from './assets/icons/arrow-left.svg';

export const SettingsHeader = () => {
  const nav = useNavigate();
  const actionHandler = () => {
    nav('/');
  };
  return (
    <Header
      title="Additional"
      action={
        <RoundBtn icon={actionIcon} onClick={actionHandler} />
    }
    />
  );
};
