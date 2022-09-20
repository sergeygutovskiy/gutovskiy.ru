export type Styles = {
  'container': string;
  'container__image': string;
  'container__title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
