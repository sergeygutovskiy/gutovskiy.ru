const notes: INote[] = [
  { id: 38, categories: [ 1, 2, 5 ], label: 'Как собирается web-страница' },
  
  { id: 37, categories: [ 1 ], label: 'Event Loop' },
  { id: 36, categories: [ 7 ], label: 'Cohesion и Coupling' },
  
  { id: 35, categories: [ 6, 7 ], label: 'Microfrontend :o' },

  { id: 34, categories: [ 7 ], label: 'Twelve-Factor App' },
  { id: 33, categories: [ 6, 10 ], label: 'a11y и i18n' },
  { id: 32, categories: [ 1, 5 ], label: 'JS монорепозитории — NX' },
  { id: 31, categories: [ 2, 8 ], label: 'defensivecss.dev' },

  { id: 30, categories: [ 4, 5, 6 ], label: 'SemVer' },
  { id: 29, categories: [ 1 ], label: 'Proxy и Reflect' },

  { id: 28, categories: [ 1, 2 ], label: 'Mobile 100vh hack' },
  { id: 27, categories: [ 7, 8 ], label: 'Refactoring Guru' },
  { id: 26, categories: [ 6, 8 ], label: 'Ahmad Shadeed' },
  { id: 25, categories: [ 10   ], label: 'iOS best architecture' },
  { id: 24, categories: [ 1, 3 ], label: 'Abort controller в React\'е' },
  { id: 23, categories: [ 1    ], label: 'Abort controller' },
  { id: 22, categories: [ 8    ], label: 'Vladimir Klepov as a Coder' },

  { id: 1,  categories: [ 2    ], label: 'HSL цвета' },
  { id: 2,  categories: [ 2    ], label: 'White-space, overflow-wrap, text-overflow, word-break' },
  { id: 3,  categories: [ 4    ], label: 'Хеширование названий js / css файлов' },
  { id: 4,  categories: [ 4, 6 ], label: 'Progressive JPEG' },
  { id: 5,  categories: [ 1    ], label: 'Детали работы событий в JS' },
  { id: 6,  categories: [ 4    ], label: 'Клавиатурная навигация' },
  { id: 7,  categories: [ 2    ], label: 'Детали загрузки шрифтов' },
  { id: 8,  categories: [ 4    ], label: 'Семантическая верстка' },
  { id: 9,  categories: [ 6    ], label: 'Callback Hell' },
  { id: 10, categories: [ 5    ], label: 'API' },
  { id: 11, categories: [ 10   ], label: 'Авторизация или аутентификация' },
  { id: 12, categories: [ 2    ], label: 'CSS препроцессоры' },
  { id: 13, categories: [ 5    ], label: 'Dart - альтернатива JS' },
  { id: 14, categories: [ 2    ], label: 'Картинки загружаются и при display: none' },
  { id: 15, categories: [ 2    ], label: 'Mobile / Desktop first' },
  { id: 16, categories: [ 2    ], label: 'Соотношение сторон в картинках' },
  { id: 17, categories: [ 4    ], label: 'FCP и LCP' },
  { id: 18, categories: [ 4, 6 ], label: 'RTL и LTR' },
  { id: 19, categories: [ 5    ], label: 'Webpack' },
];

const notesCategories: INoteCategory[] = [
  { id: 1,  theme: '1' , label: 'JS' },
  { id: 2,  theme: '2' , label: 'CSS' },
  { id: 3,  theme: '3' , label: 'React' },
  { id: 4,  theme: '4' , label: 'Best-practies' },
  { id: 5,  theme: '5' , label: 'Технологии' },
  { id: 6,  theme: '6' , label: 'Интересное' },
  { id: 7,  theme: '7' , label: 'Архитектура и проектирование' },
  { id: 8,  theme: '8' , label: 'Ресурсы' },
  { id: 10, theme: '10', label: 'Офтоп' },
];

const fullNotes: IFullNote[] = [
  {
    id: 38,
    title: 'Как собирается web-страница',
    image: '/images/notes/html-building.webp',
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work',
    ],
    date: '17.10.2022',
  },

  {
    id: 37,
    title: 'Event Loop',
    image: '/images/notes/event-loop.gif',
    description: `
      <p>
        По <a href="http://latentflip.com/loupe">этой ссылке</a> 
        можно попробовать песочницу, 
        в которой показывается, что происходит внутри <code>event loop</code>'а.
      </p>
    `,
    links: [
      'https://suneetbansal.medium.com/event-loop-macro-vs-micro-task-javascript-bd4296768b64',
      'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
      'https://www.youtube.com/watch?v=cCOL7MC4Pl0',
    ],
    date: '17.10.2022',
  },
  
  {
    id: 36,
    title: 'Cohesion и Coupling',
    image: '/images/notes/coupling-and-cohesion.png',
    links: [
      'https://habr.com/ru/post/568216',
      'https://stackoverflow.com/questions/3085285/difference-between-cohesion-and-coupling',
    ],
    date: '17.10.2022',
  },

  {
    id: 35,
    title: 'Microfrontend :o',
    image: '/images/notes/microfrontend.png',
    links: [
      'https://micro-frontends.org/',
      'https://medium.com/stepstone-tech/microfrontends-extending-service-oriented-architecture-to-frontend-development-part-1-120b71c87b68',
    ],
    date: '03.10.2022',
  },

  {
    id: 34,
    title: 'Twelve-Factor App',
    image: '/images/notes/12-factor-app-principles.png',
    links: [
      'https://www.redhat.com/architect/12-factor-app',
    ],
    date: '30.09.2022',
  },

  {
    id: 33,
    title: 'a11y и i18n',
    image: '/images/notes/a11y.jpeg',
    description: `
      <p>
        <code>a11y</code> — a(ccessibilit)y
      </p>

      <p>
        <code>i18n</code> — i(nternationalizatio)n
      </p>
    `,
    links: [
      'https://www.a11yproject.com',
      'https://www.i18next.com',
    ],
    date: '30.09.2022',
  },

  {
    id: 32,
    title: 'JS монорепозитории — NX',
    image: '/images/notes/nx.png',
    links: [
      'https://nx.dev',
    ],
    date: '30.09.2022',
  },

  {
    id: 31,
    title: 'defensivecss.dev',
    image: '/images/notes/defensive-css.png',
    description: `
      <p>
        Проект разработчика <a href="/notes/#26">Ahmad Shadeed</a> с советами по написанию безопасного CSS кода.
      </p>
      `,
    links: [
      'https://defensivecss.dev',
    ],
    date: '30.09.2022',
  },

  {
    id: 30,
    title: 'SemVer',
    image: '/images/notes/semver.png',
    links: [
      'https://blog.thoughtspile.tech/2021/11/08/semver-challenges',
    ],
    date: '20.09.2022',
  },

  {
    id: 29,
    title: 'Proxy и Reflect',
    image: '/images/notes/js-proxy.png',
    links: [
      'https://learn.javascript.ru/proxy',
    ],
    date: '20.09.2022',
  },

  {
    id: 28,
    title: 'Mobile 100vh hack',
    image: '/images/notes/100-vh-hack.webp',
    links: [
      'https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit',
    ],
    date: '19.09.2022',
  },

  {
    id: 27,
    title: 'refactoring.guru',
    image: '/images/notes/refactoring.guru.png',
    links: [
      'https://refactoring.guru',
    ],
    date: '19.09.2022',
  },

  {
    id: 26,
    title: 'Ahmad Shadeed',
    image: '/images/notes/shadeed.jpg',
    links: [
      'https://ishadeed.com/',
    ],
    date: '19.09.2022',
  },

  {
    id: 25,
    title: 'iOS best architecture',
    image: '/images/notes/ios-best.jpg',
    links: [
      'https://github.com/Exey/iOS-Best-Architecture',
    ],
    date: '19.09.2022',
  },

  {
    id: 24,
    title: 'Abort controller в React\'е',
    image: '/images/notes/abort-controller-in-react.png',
    description: 'Пример использования abort controller\'а для предотвращения изменения стейта в анмантированных компонентах.',
    links: [
      'https://medium.com/@cis.bart/react-abort-controller-and-onclick-async-calls-aa4776772262',
    ],
    date: '19.09.2022',
  },

  {
    id: 23,
    title: 'Abort controller',
    description: 'Инструмент, позволяющий програмно останавливать сетевые запросы.',
    links: [
      'https://developer.mozilla.org/ru/docs/Web/API/AbortController'
    ],
    date: '19.09.2022',
  },

  {
    id: 22,
    title: 'Vladimir Klepov as a Coder',
    description: 'Хороший сайт с заметками и статьями по фронту.',
    links: [
      'https://blog.thoughtspile.tech/',
    ],
    date: '19.09.2022',
  },

  {
    id: 1,
    title: 'HSL цвета',
    image: '/images/notes/hsl.jpg',
    description: 'В css свойство color обычно задается через hex либо rgb, но еще существует функция hsl, которая не используют принцип сочетания rbg оттенков.',
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl',
    ],
    date: '25.08.2021',
  },

  {
    id: 2,
    title: 'White-space, overflow-wrap, text-overflow, word-break',
    description: 'Много свойств для всевозможного регулирования перекрытия и переноса текста в блоках.',
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/white-space',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/word-break',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap',
    ],
    date: '23.08.2021',
  },

  {
    id: 3,
    title: 'Хеширование названий js / css файлов',
    description: `
      <p>
        Делаем из <code>app.css</code> <code>app-ad13sdsf23.css</code>, 
        и избавляем пользователей от проблемы использования закешированных старых ресурсов.
      </p>
    `,
    date: '21.08.2021',
  },

  {
    id: 4,
    title: 'Progressive JPEG',
    image: '/images/notes/baseline_progressive_jpeg_compare.webp',
    description: 'Формат, который поможет сделать процесс загрузки jpg картинки более приятным для пользователя.',
    links: [
      'https://walnut.team/blog/pogovorim-o-tehnologiyah/progressive-jpeg-chto-za-zver',
    ],
    date: '19.08.2021',
  },

  {
    id: 5,
    title: 'Детали работы событий в JS',
    description: 'Всплытие, погружение, делегирование и значение других умных слов.',
    links: [
      'https://learn.javascript.ru/events',
    ],
    date: '16.08.2021',
  },

  {
    id: 6,
    title: 'Клавиатурная навигация',
    image: '/images/notes/focus-tree.png',
    description: `
      <p>
        По интерактивным элементам сайта можно перемещаться используя tab'ы. 
        Для выделения текущего активного элемента на странице используется состояние <code>:focus</code>. 
        Как правило разработчики забивают на оформление этого свойства, что приводит к плохому опыту пользования у юзеров.
      </p>
    `,
    links: [
      'https://www.okta.com/identity-101/authentication-vs-authorization',
    ],
    date: '15.08.2021',
  },

  {
    id: 7,
    title: 'Детали загрузки шрифтов',
    image: '/images/notes/font-loading.png',
    description: 'При использовании внешних шрифтов (тех, что нет в системе пользователя) может возникнуть ряд проблем из-за длительной загрузки этих шрифтов: сдвиг контента, временное отсутствие какого-либо текста и т.д. Поэтому важно понимать, как в целом браузер работает со шрифтами и как можно менять это поведение.',
    date: '13.08.2021',
  },

  {
    id: 8,
    title: 'Семантическая верстка',
    image: '/images/notes/semantic-html.jpg',
    description: 'Как избавиться от бесконечных div\'ов в html разметке и сделать её более читаемой и доступной.',
    date: '10.08.2021',
  },

  {
    id: 9,
    title: 'Callback Hell',
    image: '/images/notes/callback-hell.png',
    date: '8.08.2021',
  },

  {
    id: 10,
    title: 'API',
    description: 'Как сделать функции вашего приложения доступными для других сервисов.',
    links: [
      'https://habr.com/ru/post/464261',
    ],
    date: '5.08.2021',
  },

  {
    id: 11,
    title: 'Авторизация или аутентификация',
    description: 'В общих словах: авторизация - проверка входа пользователя в свой аккаунт, аутентификация - выставление пользователю определенных ролей, прав доступа.',
    links: [
      'https://www.sailpoint.com/identity-library/difference-between-authentication-and-authorization',
    ],
    date: '01.08.2021',
  },

  {
    id: 12,
    title: 'CSS препроцессоры',
    description: 'Как внести в написание стилей чуть-чуть больше программирования с функциями, классами и даже наследованием.',
    links: [
      'https://www.freecodecamp.org/news/css-preprocessors',
    ],
    date: '30.07.2021',
  },

  {
    id: 13,
    title: 'Dart - альтернатива JS',
    description: 'Google сделала свой язык, который можно использовать для web\'а и мобильной кроссплатформенной разработки.',
    links: [
      'https://dart.dev/overview',
    ],
    date: '21.07.2021',
  },

  {
    id: 14,
    title: 'Картинки загружаются и при display: none',
    description: `
      <p>
        Бывает, что на экране определенного размера нужно прятать изображение. 
        Это можно сделать через <code>display: none</code>, но у такого подхода есть недостаток: 
        картинка все равно будет загружаться хоть и не показываться. 
        Есть решение лучше, использующее современный тэг <code>picture</code>, 
        которое позволяет избавиться от этой проблемы.
      </p>
    `,
    links: [
      'https://medium.com/@mike_masey/how-to-use-the-picture-element-to-prevent-images-loading-on-mobile-devices-1376e33b190e',
    ],
    date: '16.07.2021',
  },

  {
    id: 15,
    title: 'Mobile / Desktop first',
    description: 'Сайт можно делать для ПК и адаптировать под мобилки, а можно и наоборот: сперва под телефон, затем - под ПК. Существует ряд критериев, чтобы определить каким из подходов стоит пользоваться.',
    links: [
      'https://ishadeed.com/article/the-state-of-mobile-first-and-desktop-first',
    ],
    date: '15.07.2021',
  },

  {
    id: 16,
    title: 'Соотношение сторон в картинках',
    image: '/images/notes/share-crop-aspect-ratio.jpg',
    description: `
      <p>
        Как делать адаптивные картинки с определенным соотношением сторон 
        используя прием с <code>padding</code> или новое свойство <code>aspect-ratio</code>.
      </p>
    `,
    links: [
      'https://css-tricks.com/aspect-ratio-boxes',
    ],
    date: '11.07.2021',
  },

  {
    id: 17,
    title: 'FCP и LCP',
    image: '/images/notes/fcp-lcp.jpg',
    description: 'Как узнать, за какое среднее время пользователю показывается ваш сайт (FCP), а также как решить проблему с долгой отрисовкой страницы (LCP).',
    date: '10.07.2021',
  },

  {
    id: 18,
    title: 'RTL и LTR',
    image: '/images/notes/rtl-ltr.jpg',
    description: 'Эти термины всплывают, когда речь заходит о поддержке на сайте арабской вязи, иероглифов и других странных языков.',
    links: [
      'https://habr.com/ru/post/484886',
    ],
    date: '05.06.2021',
  },

  {
    id: 19,
    title: 'Webpack',
    image: '/images/notes/webpack.png',
    description: 'Инструмент, который поможет избавиться от 45 запущенных в консоли фоновых процессов для сборки проекта. Все настраиваться через один файл конфига.',
    links: [
      'https://habr.com/ru/post/514838',
      'https://medium.com/js-imaginea/webpack-why-and-what-4948433cc2d3'
    ],
    date: '01.06.2021',
  },
];

export {
  notes,
  notesCategories,
  fullNotes,
};
