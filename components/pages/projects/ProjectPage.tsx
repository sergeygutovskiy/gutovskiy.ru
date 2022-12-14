import { FC } from 'react';

import { PageTitle } from '@components/common/page-title';
import { AppLayout } from '@layouts/app';

import { List } from './list';

type Props = {
  timeline: IProjectsTimelineItem[],
};

const ProjectsPage: FC<Props> = props => {
  const { timeline } = props;

  const recentTimeline = [ ...timeline ].reverse().map(item => ({ ...item, projects: [ ...item.projects ].reverse() }));

  return (
    <AppLayout>
      <PageTitle text='Портфолио' img='/icons/bookmark.svg' />

      <List timeline={recentTimeline} />
    </AppLayout>
  );
};

export default ProjectsPage;

