import { FC, ReactNode } from 'react';

import { Footer } from '@components/common/footer';
import { Navigation } from '@components/common/navigation';

import styles from './AppLayout.module.scss';

type Props = {
  children: ReactNode,
};

const AppLayout: FC<Props> = props => {
  const { children } = props;

  return (
    <div className={styles.appLayout} id="app-layout">
      <Navigation />

      <div className={styles.appLayout__content}>
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
