import React from 'react';
import styles from './ListItem.module.scss';

interface IListItem {
  title: string | JSX.Element
  descr?: string
  value?: string | JSX.Element
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  className?: string
}

export const ListItem:React.FC<IListItem> = ({
  title, descr, value, onClick, className,
}) => {
  return (
    /* eslint-disable jsx-a11y/interactive-supports-focus */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    <div
      className={
        [
          styles.wrapper,
          onClick !== undefined ? styles.wrapperClicked : null, className].join(' ')
}
      role="button"
      onClick={onClick}
    >
      <div className={styles.descr}>
        {
          !React.isValidElement(title)
            ? <h3 className={styles.title}>{title}</h3>
            : title
        }
        <span className={styles.descrText}>{descr}</span>
      </div>
      {
        !React.isValidElement(value)
          ? <span className={styles.value}>{value}</span>
          : value
      }
    </div>
  );
};
