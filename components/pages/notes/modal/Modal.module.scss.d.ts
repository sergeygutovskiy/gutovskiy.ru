export type Styles = {
  'content': string;
  'content__date': string;
  'content__description': string;
  'content__description_content_html': string;
  'content__image': string;
  'content__link': string;
  'content__links': string;
  'content__subtitle': string;
  'content__title': string;
  'modal__enter': string;
  'modal__enter_active': string;
  'modal__exit': string;
  'modal__exit_active': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
