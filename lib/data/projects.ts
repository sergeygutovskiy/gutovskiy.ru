const timeline: IProjectsTimelineItem[] = [
  {
    period: '2020-2022',
    paragraph: '<p>Проекты, которые я разработал за время работы в компании <a href="https://terexov.ru">Terexov</a>',
    projects: [
      {
        title: 'ЕРСМ',
        link: 'https://ersm-spb.ru',
        sources: 'https://github.com/sergeygutovskiy/work-ersm',
        image: '/images/projects/ersm.jpeg',
      },
      {
        title: 'РКМ',
        link: 'https://po-rkm.ru',
        sources: 'https://github.com/sergeygutovskiy/work-rkm',
        image: '/images/projects/po-rkm.jpeg',
      },
      {
        title: 'Ева Борисова',
        sources: 'https://github.com/sergeygutovskiy/work-evaborisova',
        image: '/images/projects/eva-borisovaru.jpeg',
      },
      {
        title: 'Сотникова Анна',
        link: 'https://annasotnikova.com',
        sources: 'https://github.com/sergeygutovskiy/work-sotnikova',
        image: '/images/projects/annasotnikovacom.jpeg',
      },
      {
        title: 'Ани люкс',
        image: '/images/projects/spa-aniru.jpeg',
      },
      {
        title: 'НЕГА Консалтинг',
        sources: 'https://github.com/sergeygutovskiy/buhalder',
        image: '/images/projects/negaconsru.jpeg',
      },
      {
        title: 'LiteManager',
        link: 'https://litemanager.org',
        image: '/images/projects/litemanager.jpg',
        tags: ['WordPress'],
      },
      {
        title: 'PAPAKADO',
        link: 'https://papakado.ru',
        sources: 'https://github.com/sergeygutovskiy/papakado.ru',
        image: '/images/projects/papakado.jpg',
        tags: ['Vue', 'SPA', 'Laravel'],
      },
      {
        title: 'DL-agro',
        link: 'https://dl-agro.ru',
        image: '/images/projects/dl-agro.jpg',
        tags: ['Vue', 'SPA', 'WordPress'],
      },
      {
        title: 'ТагилПресс',
        link: 'https://tagil-press.ru',
        sources: 'https://github.com/sergeygutovskiy/tagil-press.ru',
        image: '/images/projects/tagil-press.jpg', 
        tags: ['Next', 'SSG'],
      },
    ]
  },
  {
    period: "Фриланс",
    paragraph: '<p>Проекты, которые я делал в нерабочее время для знакомых и друзей.</p>',
    projects: [
      {
        title: 'Staff Basis group',
        link: 'http://staffbasis.ru',
        image: '/images/projects/staffbasis.ru.jpg',
        tags: ['WordPress'],
      },
      {
        title: 'Центр системного коучинга',
        link: 'https://sccentre.ru',
        image: '/images/projects/scc.jpg',
        tags: ['WordPress'],
      },
    ],
  },
  {
    period: "Дипломный проект",
    projects: [
      {
        title: 'МериЯн',
        link: 'https://meriyan.ru',
        sources: 'https://github.com/sergeygutovskiy/work-tours',
        image: '/images/projects/meriyanru.jpeg',
        tags: ['Laravel'],
      },
    ],
  },
  {
    period: "2022-н.в.",
    paragraph: '<p>Проекты, в разработке которых я принимал участие за время работы в веб-отделе университета ИТМО.</p>',
    projects: [
      {
        title: 'ИТМО Абит',
        link: 'https://abit.itmo.ru',
        image: '/images/projects/abit.jpg',
        tags: ['Next', 'SSR'],
      },
      {
        title: 'ИТМО Абит ЛК',
        link: 'https://abitlk.itmo.ru',
        image: '/images/projects/abitlk.jpg',
        tags: ['Next', 'SSR'],
      },
    ]
  },
];

export { timeline };
