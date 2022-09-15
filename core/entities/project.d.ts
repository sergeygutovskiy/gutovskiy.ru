interface IProject {
  title: string,
  link?: string,
  image?: string,
  paragraph?: string,
  sources?: string,
  tags?: string[],
};

interface IProjectsTimelineItem {
  period: string,
  projects: IProject[],
};
