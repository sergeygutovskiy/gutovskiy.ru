interface IProject {
  title: string,
  image: string,
  link?: string,
  paragraph?: string,
  sources?: string,
  tags?: string[],
};

interface IProjectsTimelineItem {
  period: string,
  projects: IProject[],
};
