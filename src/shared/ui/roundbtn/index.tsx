import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface IRoundBtn {
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void),
  icon: string | JSX.Element
}

export const RoundBtn:React.FC<IRoundBtn> = ({ icon, onClick }) => {
  return (
    <button type="button" className={styles.wrapper} onClick={onClick}>
      {icon}
    </button>
  );
};
