import reduceClasses from 'lib/helpers/reduceClasses';
import { FC } from 'react';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <nav className={styles.navigation__links}>
        <a className={reduceClasses(styles.navigation__link, styles.navigation__title)} href="">Главная</a>
        <a className={styles.navigation__link} href="">Заметки</a>
        <a className={styles.navigation__link} href="">Портфолио</a>
      </nav>
    </div>
  );
};

export default Navigation;
