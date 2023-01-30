import React from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../shared/model/store';
import { setCurrentLocation } from '../../shared/model/store/actions/settings';
import { Card } from '../../shared/ui/card/card';
import { ItemDivider } from '../../shared/ui/item-divider/ItemDivider';
import { ListItem } from '../../shared/ui/list-item/ListItem';
import styles from './styles.module.scss';

const TestJSX: React.FC = () => <h1>Title</h1>;

interface ICitySelector {
  data: any
}

export const CitySelector: React.FC<ICitySelector> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectHandler = (event: React.MouseEvent<HTMLDivElement>, item: any) => {
    dispatch(setCurrentLocation(item));
    localStorage.setItem('location', JSON.stringify(item));
    navigate('/');
  };

  return (
    data != null
      ? (
        <Card className={styles.selector}>
          {
            data.map((item: any) => (
              <div key={item.id}>
                <ListItem
                  title={item.name}
                  descr={item.admin1}
                  value=""
                  onClick={(event) => selectHandler(event, item)}
                />
                <ItemDivider />
              </div>
            ))
          }
        </Card>
      )
      : null
  );
};
