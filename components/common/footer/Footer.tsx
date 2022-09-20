import Link from 'next/link';
import { FC } from 'react';

import InstaIcon from '@public/icons/insta.svg';
import VKIcon from '@public/icons/vk.svg';
import TgIcon from '@public/icons/tg.svg';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__items}>
        <Link href='/'>
          <a className={styles.footer__home}>GUTOVSKIY.RU</a>
        </Link>

        <div className={styles.footer__icons}>
          <a className={styles.footer__icon} href="https://www.instagram.com/gutovskiy.ru">
            <InstaIcon />
          </a>

          <a className={styles.footer__icon} href="https://vk.com/gutovskiyru">
            <VKIcon />
          </a>

          <a className={styles.footer__icon} href="https://t.me/gutovskiy_ru">
            <TgIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
