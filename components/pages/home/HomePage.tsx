import { FC } from 'react';
import Image from 'next/image';

import { AppLayout } from '@layouts/app';
import AvatarImage from '@public/images/avatar.jpeg';

import styles from './HomePage.module.scss';

const HomePage: FC = () => {
  return (
    <AppLayout>
      <section className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.hero__image}>
              <Image
                src={AvatarImage}
                alt={'avatar'}
                layout='fill'
                objectFit='cover'
              />
          </div>

          <div className={styles.hero__content}>
            <h1 className={styles.hero__name}>Гутовский Сергей</h1>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default HomePage;
