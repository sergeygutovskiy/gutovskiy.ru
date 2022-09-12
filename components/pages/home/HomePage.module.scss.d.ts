export type Styles = {
  'hero': string;
  'hero__content': string;
  'hero__image': string;
  'hero__name': string;
  'page': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
