import { FC } from 'react';
import Image from 'next/image';

import reduceClasses from '@lib/helpers/reduceClasses';

import styles from './Project.module.scss';

type Props = {
  title: string,
  image: string,
  paragraph?: string,
  link?: string,
  tags?: string[],
  sources?: string,

  className?: string | string[],
};

const Project: FC<Props> = props => {
  const { title, image, paragraph, link, tags, sources, className } = props;
  
  return (
    <div className={reduceClasses(className, styles.project)}>
      <div className={styles.project__header}>
        <h3 className={styles.project__title}>
          {title}
        </h3>

        {link && <a className={styles.project__link} href={link}>{link}</a>}
      </div>

      {
        image &&
        <div className={styles.project__image}>
          <Image
            src={image}
            alt={title}
            layout='fill'
          />
        </div>
      }

      {paragraph && <p className={styles.project__paragraph}>{paragraph}</p>}

      {
        tags &&
        <div className={styles.project__tags}>
          {tags.map((tag, index) => <span className={styles.project__tag} key={index}>{tag}</span>)}
        </div>
      }
    </div>
  );
};

export default Project;
