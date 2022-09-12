export type Styles = {
  'navigation': string;
  'navigation__link': string;
  'navigation__links': string;
  'navigation__title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
