import reduceClasses from 'lib/helpers/reduceClasses';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <nav className={styles.navigation__links}>
        <Link href='/'>
          <a className={reduceClasses(styles.navigation__link, styles.navigation__title)}>Главная</a>
        </Link>

        <Link href='/notes'>
          <a className={styles.navigation__link}>Заметки</a>
        </Link>

        <Link href='/projects'>
          <a className={styles.navigation__link}>Портфолио</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
