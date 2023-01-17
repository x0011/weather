import React, { PropsWithChildren } from 'react';
import styles from './card.module.scss';

interface ICard extends PropsWithChildren {
  className?: string,
}

export const Card:React.FC<ICard> = ({ children, className }) => (
  <div className={[styles.wrapper, className].join(' ')}>{children}</div>
);
