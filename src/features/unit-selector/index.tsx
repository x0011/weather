import React from 'react';
import { Units } from '../../shared/api/weather/weather-v2';
import { useAppDispatch, useTypedSelector } from '../../shared/model/store';
import { setCurrentUnit } from '../../shared/model/store/actions/settings';
import { Card } from '../../shared/ui/card/card';
import { Container } from '../../shared/ui/container/container';
import { CheckIcon } from '../../shared/ui/icons';
import { ItemDivider } from '../../shared/ui/item-divider/ItemDivider';
import { ListItem } from '../../shared/ui/list-item/ListItem';
import { Title } from '../../shared/ui/title/title';
import styles from './style.module.scss';

export const UnitSelector = () => {
  const dispatch = useAppDispatch();

  const unitsMap = (Object.keys(Units) as (keyof typeof Units)[]).map((item) => item);
  const { currentUnit } = useTypedSelector((state) => state.settings);

  const changeUnit = (unit: Units, item: keyof typeof Units) => {
    if (unit !== currentUnit) {
      localStorage.setItem('unit', item);
      dispatch(setCurrentUnit(unit));
    }
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <Title value="Unit" />
        <Card className={styles.units}>
          {
           unitsMap.map((item, count, row) => {
             return (
               <div key={item}>
                 <ListItem
                   title={Units[item]}
                   descr=""
                   value={currentUnit === Units[item] ? <CheckIcon className={styles.actionIcon} /> : ''}
                   onClick={() => changeUnit(Units[item], item)}
                 />
                 {row.length !== count + 1 ? <ItemDivider /> : null}
               </div>
             );
           })
          }
        </Card>
      </div>
    </Container>
  );
};
