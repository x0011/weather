import { useNavigate } from 'react-router';
import { useTypedSelector } from '../../../shared/model/store';
import { RoundBtn } from '../../../shared/ui/roundbtn';
import { Title } from '../../../shared/ui/title/title';
import styles from './styles.module.scss';
import { CloseIcon } from '../../../shared/ui/icons';
import { Header } from '../header';

export const SelectCityHeader = () => {
  const { currentLocation: location } = useTypedSelector((state) => state.settings);
  const nav = useNavigate();
  const closeBtnHandler = () => {
    nav('/');
  };
  return (
    <Header
      title={(
        location
          ? (
            <Title
              value="Select city"
              subheader={`Current location: ${location?.name}`}
            />
          )
          : (
            <Title
              value="Select city"
            />
          )
      )}
      action={
        <RoundBtn icon={<CloseIcon className={styles.icon} />} onClick={closeBtnHandler} />
    }
    />
  );
};
