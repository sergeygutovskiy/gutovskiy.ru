import { FC, Fragment } from 'react';

import reduceClasses from '@lib/helpers/reduceClasses';

import styles from './List.module.scss';

import { Project } from '.';

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
                  <Project
                    title={project.title}
                    image={project.image}
                    link={project.link}
                    paragraph={project.paragraph}
                    sources={project.sources}
                    tags={project.tags}

                    className={styles.timeline__project}
                  />

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
