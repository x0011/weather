import React from 'react';
import { useNavigate } from 'react-router';
import { BackIcon } from '../../../shared/ui/icons';
import { RoundBtn } from '../../../shared/ui/roundbtn';
import { Header } from '../header';
import styles from './styles.module.scss';

export const AboutHeader = () => {
  const navigator = useNavigate();
  return (
    <Header
      title="About us"
      action={(
        <RoundBtn icon={<BackIcon className={styles.actionIcon} />} onClick={() => { navigator('/settings'); }} />
      )}
    />
  );
};
