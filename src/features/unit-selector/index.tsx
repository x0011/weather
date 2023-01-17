import React from 'react';
import { Units } from '../../shared/api/weather/weather-v2';
import { useAppDispatch, useTypedSelector } from '../../shared/model/store';
import { setCurrentUnit } from '../../shared/model/store/actions/settings';
import { Card } from '../../shared/ui/card/card';
import { Container } from '../../shared/ui/container/container';
import { ItemDivider } from '../../shared/ui/item-divider/ItemDivider';
import { ListItem } from '../../shared/ui/list-item/ListItem';
import styles from './style.module.scss';
import selectIcon from './ui/item/assets/icons/check.svg';

export const UnitSelector = () => {
  const unitsMap = (Object.keys(Units) as (keyof typeof Units)[]).map((item) => item);
  const { currentUnit } = useTypedSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const changeUnit = (unit: Units) => {
    if (unit !== currentUnit) dispatch(setCurrentUnit(unit));
  };
  return (
    <Container>
      <div className={styles.wrapper}>
        <Card>
          {
           unitsMap.map((item, count, row) => {
             return (
               <div key={item}>
                 <ListItem
                   title={Units[item]}
                   descr=""
                   value={currentUnit === Units[item]
                     ? <img className={styles.checked} src={selectIcon} alt="checked" /> : ''}
                   onClick={() => changeUnit(Units[item])}
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
