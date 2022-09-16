export type Styles = {
  'project': string;
  'project__header': string;
  'project__image': string;
  'project__link': string;
  'project__paragraph': string;
  'project__tag': string;
  'project__tags': string;
  'project__title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
