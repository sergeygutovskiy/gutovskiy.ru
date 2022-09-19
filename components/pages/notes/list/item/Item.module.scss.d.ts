export type Styles = {
  'item': string;
  'item__bullet': string;
  'item__bullets': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
