export interface Project {
  id: string;
  slug: string;
  title: {
    en: string;
    ru: string;
  };
  role: {
    en: string;
    ru: string;
  };
  shortDescription: {
    en: string;
    ru: string;
  };
  fullDescription: {
    en: string;
    ru: string;
  };
  image: string;
  gallery?: string[];
  technologies: string[];
  features: {
    en: string[];
    ru: string[];
  };
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ecommerce-platform',
    title: {
      en: 'E-Commerce Platform',
      ru: 'Платформа электронной коммерции'
    },
    role: {
      en: 'Led architecture and delivery',
      ru: 'От архитектуры до запуска'
    },
    shortDescription: {
      en: 'Helping a retail business move online under tight deadlines and unclear initial scope.',
      ru: 'Помощь розничному бизнесу в выходе онлайн в сжатые сроки и при неясных начальных требованиях.'
    },
    fullDescription: {
      en: 'A retail company needed to launch online sales quickly, but requirements were fragmented across multiple stakeholders. I joined early to help structure the scope, make architectural decisions that would support future growth, and coordinate between the business team and developers. The main challenge was balancing speed-to-market with a foundation that wouldn\'t need to be rebuilt in six months. We shipped the MVP on schedule and continued iterating based on real customer behavior.',
      ru: 'Розничная компания хотела быстро запустить онлайн-продажи, но требования были разрознены между несколькими стейкхолдерами. Я подключился на раннем этапе, чтобы структурировать скоуп, принять архитектурные решения с учётом будущего роста и координировать работу между бизнесом и разработчиками. Главной задачей было найти баланс между скоростью выхода на рынок и фундаментом, который не пришлось бы переписывать через полгода. MVP запустили в срок и продолжили итерации на основе реального поведения покупателей.'
    },
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    features: {
      en: [
        'Structured inventory sync to eliminate manual stock updates that caused overselling',
        'Introduced recommendation logic to increase average order value without complex ML infrastructure',
        'Added multi-currency support early to avoid re-architecture when expanding to new markets',
        'Built an analytics view for the ops team to reduce dependency on developers for basic reporting',
        'Prioritized mobile experience based on traffic data showing 70%+ mobile users'
      ],
      ru: [
        'Настроили синхронизацию остатков, чтобы исключить ручные обновления и проблему перепродаж',
        'Внедрили логику рекомендаций для повышения среднего чека без сложной ML-инфраструктуры',
        'Заложили мультивалютность на старте, чтобы избежать переделок при выходе на новые рынки',
        'Создали аналитическое представление для операционной команды, снизив зависимость от разработчиков',
        'Приоритизировали мобильную версию на основе данных о 70%+ мобильного трафика'
      ]
    },
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
    year: 2024
  },
  {
    id: '2',
    slug: 'task-management-app',
    title: {
      en: 'Task Management System',
      ru: 'Система управления задачами'
    },
    role: {
      en: 'Owned MVP and launch',
      ru: 'От MVP до запуска'
    },
    shortDescription: {
      en: 'Replacing scattered tools with a single system for a growing distributed team.',
      ru: 'Замена разрозненных инструментов единой системой для растущей распределённой команды.'
    },
    fullDescription: {
      en: 'A startup with a growing remote team was losing visibility into who was working on what. Tasks lived in spreadsheets, Slack threads, and email. I helped define what "good enough" looked like for an MVP, made early technical choices that would scale with the team, and coordinated a small dev team through weekly releases. The goal wasn\'t to build a perfect tool — it was to reduce coordination overhead and give leadership clarity on progress.',
      ru: 'Стартап с растущей удалённой командой терял видимость того, кто над чем работает. Задачи были разбросаны по таблицам, Slack-чатам и почте. Я помог определить, как выглядит «достаточно хороший» MVP, принял ранние технические решения с учётом масштабирования команды и координировал небольшую команду разработчиков через еженедельные релизы. Цель была не в идеальном инструменте — а в снижении накладных расходов на координацию и прозрачности для руководства.'
    },
    image: '/images/projects/taskmanager.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'GraphQL'],
    features: {
      en: [
        'Added real-time updates to reduce status meetings and async check-ins',
        'Implemented Kanban and Gantt views to support different planning styles across teams',
        'Built time tracking to help the team understand where effort was actually going',
        'Created workflow automation to eliminate repetitive manual task routing',
        'Integrated with existing tools (Slack, calendar) to reduce context switching'
      ],
      ru: [
        'Добавили обновления в реальном времени, чтобы сократить статус-митинги и асинхронные проверки',
        'Внедрили Kanban и Gantt для поддержки разных стилей планирования в командах',
        'Встроили учёт времени, чтобы команда понимала, куда реально уходят усилия',
        'Создали автоматизацию воркфлоу для устранения рутинной ручной маршрутизации задач',
        'Интегрировались с существующими инструментами (Slack, календарь) для снижения переключения контекста'
      ]
    },
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
    year: 2024
  },
  {
    id: '3',
    slug: 'fintech-dashboard',
    title: {
      en: 'FinTech Analytics Dashboard',
      ru: 'Аналитическая панель FinTech'
    },
    role: {
      en: 'Led team and roadmap',
      ru: 'От команды до роадмапа'
    },
    shortDescription: {
      en: 'Giving a financial services team visibility into data they previously accessed through manual reports.',
      ru: 'Предоставление финансовой команде доступа к данным, которые раньше получали через ручные отчёты.'
    },
    fullDescription: {
      en: 'A financial services company relied on weekly reports generated manually by analysts. Leadership had limited visibility into real-time performance, and decisions were often delayed. I helped scope the initial version, coordinated a team of three developers, and worked closely with stakeholders to prioritize what mattered most. The challenge was earning trust in a regulated environment while delivering iteratively — not waiting for a "complete" product that would never ship.',
      ru: 'Финансовая компания полагалась на еженедельные отчёты, которые аналитики готовили вручную. У руководства была ограниченная видимость в реальном времени, и решения часто откладывались. Я помог определить скоуп первой версии, координировал команду из трёх разработчиков и плотно работал со стейкхолдерами над приоритизацией. Задача была заслужить доверие в регулируемой среде, поставляя итеративно — а не ждать «готового» продукта, который никогда бы не вышел.'
    },
    image: '/images/projects/fintech.jpg',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'TimescaleDB', 'D3.js'],
    features: {
      en: [
        'Enabled real-time data access to replace weekly batch reports',
        'Designed visualizations collaboratively with end users to ensure adoption',
        'Added trend indicators to support faster decision-making without analyst involvement',
        'Built a report builder so teams could self-serve instead of filing requests',
        'Implemented role-based access to meet compliance requirements from day one'
      ],
      ru: [
        'Обеспечили доступ к данным в реальном времени вместо еженедельных пакетных отчётов',
        'Проектировали визуализации совместно с конечными пользователями для обеспечения принятия',
        'Добавили индикаторы трендов для ускорения принятия решений без участия аналитиков',
        'Создали конструктор отчётов, чтобы команды могли получать данные самостоятельно',
        'Внедрили ролевой доступ для соответствия требованиям комплаенса с первого дня'
      ]
    },
    featured: true,
    year: 2023
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}
