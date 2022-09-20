import { FC } from 'react';
import Image from 'next/image';

import styles from './PageTitle.module.scss';

type Props = {
  text: string,
  img?: string,
};

const PageTitle: FC<Props> = props => {
  const { text, img } = props;

  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>{text}</h1>
      
      {
        img &&
        <div className={styles.container__image}>
          <Image
            src={img}
            width={160}
            height={160}
            alt={text}
          />
        </div>
      }
    </section>
  );
};

export default PageTitle;
