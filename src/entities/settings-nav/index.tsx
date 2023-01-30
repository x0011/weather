import React from 'react';
import { useNavigate } from 'react-router';
import { useTypedSelector } from '../../shared/model/store';
import { Card } from '../../shared/ui/card/card';
import { Container } from '../../shared/ui/container/container';
import { ItemDivider } from '../../shared/ui/item-divider/ItemDivider';
import { ListItem } from '../../shared/ui/list-item/ListItem';
import styles from './styles.module.scss';

const ArrowIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.arrowStroke} d="M5 12L18 12" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round" />
      <path className={styles.arrowStroke} d="M12 5L19 12L12 19" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
};

export const SettingsNav = () => {
  const navigate = useNavigate();
  const { currentLocation } = useTypedSelector((state) => state.settings);
  const toSelectCity = () => {
    navigate('/select-city');
  };
  return (
    <Container>
      <div className={styles.wrapper}>
        <Card>
          <ListItem
            title="Select city"
            descr={
              currentLocation !== null
                ? `Current location: ${currentLocation.name}`
                : ''
            }
            value={
              <ArrowIcon />
            }
            onClick={toSelectCity}
          />
          <ItemDivider />
          <ListItem
            title="About us"
            descr="Show team"
            value={
              <ArrowIcon />
            }
            onClick={() => navigate('/about')}
          />
          <ItemDivider />
          <ListItem
            title={
              <a className={styles.report} href="mailto://y-panteleew@yandex.ru">Error report</a>
            }
            descr=""
            value={
              <ArrowIcon />
            }
          />
        </Card>
      </div>
    </Container>
  );
};
