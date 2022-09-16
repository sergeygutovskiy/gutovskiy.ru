const notes: INote[] = [
  { id: 1,  categories: [ 2 ], label: 'HSL: цвета для программистов' },
  { id: 2,  categories: [ 2 ], label: 'White-space, overflow-wrap, text-overflow, word-break' },
  { id: 3,  categories: [ 4 ], label: 'Хеширование названий js / css файлов' },
  { id: 4,  categories: [ 4, 6 ], 'label': 'Progressive JPEG' },
  { id: 5,  categories: [ 1 ], label: 'Детали работы событий в JS' },
  { id: 6,  categories: [ 4 ], label: 'Клавиатурная навигация' },
  { id: 7,  categories: [ 2 ], label: 'Ловушка загрузки шрифтов' },
  { id: 8,  categories: [ 4 ], label: 'Семантическая верстка' },
  { id: 9,  categories: [ 6 ], label: 'Callback Hell' },
  { id: 10, categories: [ 5 ], label: 'API' },
  { id: 11, categories: [ 6 ], label: 'Авторизация или аутентификация' },
  { id: 12, categories: [ 2 ], label: 'CSS препроцессоры' },
  { id: 13, categories: [ 5 ], label: 'Dart - альтернатива JS' },
  { id: 14, categories: [ 2 ], label: 'Отмена загрузки картинок на определенных экранах' },
  { id: 15, categories: [ 2 ], label: 'Mobile / Desktop first' },
  { id: 16, categories: [ 2 ], label: 'Соотношение сторон в картинках' },
  { id: 17, categories: [ 4 ], label: 'FCP и беда LCP' },
  { id: 18, categories: [ 4, 6 ], label: 'RTL и LTR' },
  { id: 19, categories: [ 5 ], label: 'Webpack' },
];

const notesCategories: INoteCategory[] = [
  { id: 1, theme: '1', label: 'JS' },
  { id: 2, theme: '2', label: 'CSS' },
  { id: 3, theme: '3', label: 'React' },
  { id: 4, theme: '4', label: 'Best-practies' },
  { id: 5, theme: '5', label: 'Технологии' },
  { id: 6, theme: '6', label: 'Интересное' },
];

const fullNotes: IFullNote[] = [
  {
    id: 1,
    title: 'HSL: цвета для программистов',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'White-space, overflow-wrap, text-overflow, word-break',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Хеширование названий js / css файлов',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Progressive JPEG',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Детали работы событий в JS',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Клавиатурная навигация',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Ловушка загрузки шрифтов',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Семантическая верстка',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Callback Hell',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'API',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Авторизация или аутентификация',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'CSS препроцессоры',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Dart - альтернатива JS',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Отмена загрузки картинок на определенных экранах',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Mobile / Desktop first',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Соотношение сторон в картинках',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'FCP и беда LCP',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'RTL и LTR',
    image: '',
    description: '',
    links: [],
  }, {
    id: 1,
    title: 'Webpack',
    image: '',
    description: '',
    links: [],
  },
];

export {
  notes,
  notesCategories,
};
