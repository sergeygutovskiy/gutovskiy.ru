import { NextPage } from 'next';
import Image from 'next/image';

import { AppLayout } from '@layouts/app';
import NotFoundImage from '@public/images/404.jpeg';

import styles from './404.module.scss';
import { PageTitle } from '@components/common/page-title';

const NotFound: NextPage = () => {
  return (
    <AppLayout>
      <PageTitle text='Страница не найдена' />

      <div className={styles.wrapper}>
        <Image
          src={NotFoundImage}
          alt='Страница не найдена'
          width={750}
          height={600}
          layout='intrinsic'
        />
      </div>
    </AppLayout>
  );
};

export default NotFound;
