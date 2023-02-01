import React from 'react';
import { ActionMenu } from '../../features/action-menu/actionMenu';
import { CurrentCityTitle } from '../../entities/current-city-title/CurrentCityTitle';
import { Title } from '../../shared/ui/title/title';
import styles from './header.module.scss';
import { Container } from '../../shared/ui/container/container';

interface IHeader {
  title: string | JSX.Element,
  action: JSX.Element | null
  descr?: string,
}

export const Header: React.FC<IHeader> = ({ title, descr, action }) => {
  return (
    <Container>
      <header className={styles.wrapper}>
        {
        !React.isValidElement(title)
          ? <Title className={styles.title} spaces value={typeof title === 'string' ? title : ''} />
          : title
        }
        {
          descr !== null
            ? (<span>{descr}</span>)
            : null
        }
        {action}
      </header>
    </Container>
  );
};
