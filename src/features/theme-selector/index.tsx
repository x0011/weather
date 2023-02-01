import React from 'react';
import { useAppDispatch, useTypedSelector } from '../../shared/model/store';
import { Themes } from '../../shared/model/store/reducers/settings';
import { Card } from '../../shared/ui/card/card';
import { Container } from '../../shared/ui/container/container';
import { ItemDivider } from '../../shared/ui/item-divider/ItemDivider';
import { ListItem } from '../../shared/ui/list-item/ListItem';
import styles from './styles.module.scss';
import { setTheme } from '../../shared/model/store/actions/settings';
import { CheckIcon } from '../../shared/ui/icons';
import { Title } from '../../shared/ui/title/title';

export const ThemeSelector = () => {
  const themesLength = Object.keys(Themes).length / 2;
  const dispatch = useAppDispatch();
  const themesMap = (Object.keys(Themes) as (keyof typeof Themes)[])
    .filter((item, count) => (count < themesLength && item));
  const { currentTheme } = useTypedSelector((state) => state.settings);
  const changeTheme = (theme: Themes) => {
    if (Themes[theme] !== Themes[currentTheme]) {
      dispatch(setTheme(theme));
      localStorage.setItem('theme', JSON.stringify(theme));
      // document.documentElement.dataset.theme = Themes[theme];
    }
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <Title value="Theme" />
        <Card>
          {
           themesMap.map((item, count, row) => {
             return (
               <div key={item}>
                 <ListItem
                   title={Themes[item].toString()}
                   descr=""
                   value={Themes[count] === Themes[currentTheme]
                     ? <CheckIcon className={styles.actionIcon} /> : ''}
                   onClick={() => changeTheme(count)}
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
