export type Styles = {
  'modal': string;
  'modal__close': string;
  'modal__header': string;
  'wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
