import type { GetStaticPropsResult, NextPage } from 'next';

import { ProjectsPage } from '@components/pages/projects';
import { timeline as apiTimeline } from '@lib/data/projects';

type Props = {
  timeline: IProjectsTimelineItem[],
};

const Projects: NextPage<Props> = props => {
  return <ProjectsPage {...props} />;
};

export default Projects;

export function getStaticProps(): GetStaticPropsResult<Props> {
  const timeline = apiTimeline;

  return {
    props: { 
      timeline, 
    },
  };
};
