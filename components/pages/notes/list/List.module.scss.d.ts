export type Styles = {
  'list': string;
  'list__bullet': string;
  'list__bullets': string;
  'list__item': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
