import React from 'react';
import { useNavigate } from 'react-router';
import { useTypedSelector } from '../../shared/model/store';
import { Card } from '../../shared/ui/card/card';
import { Container } from '../../shared/ui/container/container';
import { ItemDivider } from '../../shared/ui/item-divider/ItemDivider';
import { ListItem } from '../../shared/ui/list-item/ListItem';
import styles from './styles.module.scss';

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
            value="sad"
            onClick={toSelectCity}
          />
          <ItemDivider />
          <ListItem
            title="About us"
            descr="Show team"
            value="sad"
            onClick={() => navigate('/about')}
          />
          <ItemDivider />
          <ListItem
            title="Error report"
            descr=""
            value="sad"
          />
        </Card>
      </div>
    </Container>
  );
};
