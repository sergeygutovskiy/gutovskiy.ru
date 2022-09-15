export type Styles = {
  'period': string;
  'period__paragraph': string;
  'period__title': string;
  'project': string;
  'project__header': string;
  'project__image': string;
  'project__link': string;
  'project__paragraph': string;
  'project__tag': string;
  'project__tags': string;
  'project__title': string;
  'timeline': string;
  'timeline__period': string;
  'timeline__project': string;
  'timeline__step': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
