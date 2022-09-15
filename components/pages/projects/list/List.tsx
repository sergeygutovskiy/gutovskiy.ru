import Image from 'next/image';
import { FC, Fragment } from 'react';

import reduceClasses from '@lib/helpers/reduceClasses';

import styles from './List.module.scss';

type Props = {
  timeline: IProjectsTimelineItem[],
};

const List: FC<Props> = props => {
  const { timeline } = props;
  
  return (
    <div className={styles.timeline}>
      {
        timeline.map((item, index) => (
          <Fragment key={index}>
            <div 
              className={reduceClasses(styles.timeline__period, styles.period)}
              data-first={index === 0}
              data-last={index === timeline.length - 1 && item.projects.length === 1}
            >
              <div>
                <h2 className={styles.period__title}>{item.period}</h2>
                <p className={styles.period__paragraph}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates eligendi 
                  Laborum doloremque suscipit
                </p>
              </div>
            </div>

            {
              item.projects.map((project, index) => (
                <Fragment key={`${index}-project`}>
                  <div className={reduceClasses(styles.timeline__project, styles.project)}>
                    <div className={styles.project__header}>
                      <h3 className={styles.project__title}>{project.title}</h3>
                      {
                        project.link &&
                        <a className={styles.project__link} href={project.link}>{project.link}</a>
                      }
                    </div>

                    {
                      project.image &&
                      <div className={styles.project__image}>
                        <Image
                          src={project.image}
                          layout='fill'
                          alt={project.title}
                        />
                      </div>
                    }

                    {
                      project.paragraph &&
                      <p className={styles.project__paragraph}>{project.paragraph}</p>
                    }

                    {
                      project.tags &&
                      <div className={styles.project__tags}>
                        {project.tags.map((tag, index) => <span className={styles.project__tag} key={index}>{tag}</span>)}
                      </div>
                    }
                  </div>

                  {
                    index !== item.projects.length - 1 && 
                    <div className={styles.timeline__step} aria-hidden="true" />
                  }
                </Fragment>
              ))
            }
          </Fragment>
        ))
      }
    </div>
  );
};

export default List;
