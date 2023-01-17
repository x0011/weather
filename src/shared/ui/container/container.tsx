import React, { PropsWithChildren } from 'react';
import styles from './container.module.scss';

interface IContainer extends PropsWithChildren {
  styles?: string
}

export const Container:React.FC<IContainer> = ({ children, styles: includeStyles }) => (
  <div className={[styles.wrapper, includeStyles].join(' ')}>
    {children}
  </div>
);
