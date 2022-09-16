export type Styles = {
  'modal__enter': string;
  'modal__enter_active': string;
  'modal__exit': string;
  'modal__exit_active': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
