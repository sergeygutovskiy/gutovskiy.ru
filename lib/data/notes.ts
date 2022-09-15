const notes = [
  { id: 1,  categories: [ 2 ], 'label': 'HSL: цвета для программистов' },
  { id: 2,  categories: [ 2 ], 'label': 'White-space, overflow-wrap, text-overflow, word-break' },
  { id: 3,  categories: [ 4 ], 'label': 'Хеширование названий js / css файлов' },
  { id: 4,  categories: [ 4, 6 ], 'label': 'Progressive JPEG' },
  { id: 5,  categories: [ 1 ], 'label': 'Детали работы событий в JS' },
  { id: 6,  categories: [ 4 ], 'label': 'Клавиатурная навигация' },
  { id: 7,  categories: [ 2 ], 'label': 'Ловушка загрузки шрифтов' },
  { id: 8,  categories: [ 4 ], 'label': 'Семантическая верстка' },
  { id: 9,  categories: [ 6 ], 'label': 'Callback Hell' },
  { id: 10, categories: [ 5 ], 'label': 'API' },
  { id: 11, categories: [ 6 ], 'label': 'Авторизация или аутентификация' },
  { id: 21, categories: [ 2 ], 'label': 'CSS препроцессоры' },
  { id: 31, categories: [ 5 ], 'label': 'Dart - альтернатива JS' },
  { id: 41, categories: [ 2 ], 'label': 'Отмена загрузки картинок на определенных экранах' },
  { id: 51, categories: [ 2 ], 'label': 'Mobile / Desktop first' },
  { id: 61, categories: [ 2 ], 'label': 'Соотношение сторон в картинках' },
  { id: 71, categories: [ 4 ], 'label': 'FCP и беда LCP' },
  { id: 81, categories: [ 4, 6 ], 'label': 'RTL и LTR' },
  { id: 91, categories: [ 5 ], 'label': 'Webpack' },
];

const notesCategories = [
  { id: 1, theme: '1', label: 'JS' },
  { id: 2, theme: '2', label: 'CSS' },
  { id: 3, theme: '3', label: 'React' },
  { id: 4, theme: '4', label: 'Best-practies' },
  { id: 5, theme: '5', label: 'Технологии' },
  { id: 6, theme: '6', label: 'Интересное' },
];

export {
  notes,
  notesCategories,
};
