import React from 'react';
import styles from './style.module.scss';
import checkIcon from './assets/icons/check.svg';
import { CheckIcon } from '../../../../shared/ui/icons';

interface IUnitSelectorItem {
  text: string,
  active?: boolean,
}

export const UnitSelectorItem: React.FC<IUnitSelectorItem> = ({ text, active = false }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{text}</h3>
      {active ? <CheckIcon /> : null}
    </div>
  );
};
