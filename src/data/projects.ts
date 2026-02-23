import { DiagramData } from '@/components/DiagramCanvas';
import {
  architectureDiagram,
  deduplicationDiagram,
  userJourneyDiagram,
} from './invitro-diagrams';

export interface TechnicalDiagram {
  id: string;
  title: string;
  image?: string; // Optional - for backward compatibility
  diagramData?: DiagramData; // New - canvas data
  caption: string;
}

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

  // New fields for enhanced project descriptions
  clientContext?: {
    en: string;
    ru: string;
  };

  technicalSolution?: {
    en: {
      title: string;
      description: string;
      diagrams: TechnicalDiagram[];
    };
    ru: {
      title: string;
      description: string;
      diagrams: TechnicalDiagram[];
    };
  };

  impact?: {
    en: {
      metrics: string[];
      qualitative: string[];
    };
    ru: {
      metrics: string[];
      qualitative: string[];
    };
  };

  features: {
    en: string[];
    ru: string[];
  };
  challenges: {
    en: string[];
    ru: string[];
  };
  scope: {
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
    challenges: {
      en: [
        'Fragmented requirements across multiple stakeholders with conflicting priorities',
        'Balancing speed-to-market pressure with building a sustainable foundation',
        'Legacy inventory system integration with limited API access'
      ],
      ru: [
        'Разрозненные требования от нескольких стейкхолдеров с противоречащими приоритетами',
        'Баланс между давлением на скорость выхода и построением устойчивого фундамента',
        'Интеграция с устаревшей системой остатков при ограниченном доступе к API'
      ]
    },
    scope: {
      en: [
        'Requirements structuring and stakeholder alignment',
        'Architecture design and technical decision-making',
        'Development team coordination and delivery management',
        'Post-launch iteration based on customer behavior data'
      ],
      ru: [
        'Структурирование требований и согласование со стейкхолдерами',
        'Проектирование архитектуры и принятие технических решений',
        'Координация команды разработки и управление поставкой',
        'Пост-запускные итерации на основе данных о поведении клиентов'
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
    challenges: {
      en: [
        'Replacing entrenched habits across teams using different tools',
        'Defining "good enough" for MVP without over-engineering',
        'Maintaining momentum with weekly releases while ensuring stability'
      ],
      ru: [
        'Замена укоренившихся привычек в командах, использующих разные инструменты',
        'Определение «достаточно хорошего» MVP без переусложнения',
        'Поддержание темпа еженедельных релизов при обеспечении стабильности'
      ]
    },
    scope: {
      en: [
        'MVP definition and feature prioritization',
        'Technical architecture decisions for scalability',
        'Small development team coordination',
        'Weekly release management and stakeholder communication'
      ],
      ru: [
        'Определение MVP и приоритизация функций',
        'Технические архитектурные решения для масштабируемости',
        'Координация небольшой команды разработки',
        'Управление еженедельными релизами и коммуникация со стейкхолдерами'
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
    challenges: {
      en: [
        'Building trust in a regulated environment while delivering iteratively',
        'Multiple data sources with inconsistent formats and update frequencies',
        'Balancing real-time requirements with system performance constraints'
      ],
      ru: [
        'Завоевание доверия в регулируемой среде при итеративной поставке',
        'Множество источников данных с несогласованными форматами и частотой обновления',
        'Баланс требований реального времени с ограничениями производительности системы'
      ]
    },
    scope: {
      en: [
        'Initial version scoping and stakeholder prioritization',
        'Development team of three coordination',
        'Compliance requirements integration from project start',
        'User adoption strategy and visualization design collaboration'
      ],
      ru: [
        'Определение скоупа первой версии и приоритизация стейкхолдеров',
        'Координация команды из трёх разработчиков',
        'Интеграция требований комплаенса с начала проекта',
        'Стратегия принятия пользователями и совместное проектирование визуализаций'
      ]
    },
    featured: true,
    year: 2023
  },
  {
    id: '4',
    slug: 'invitro-medical-platform',
    title: {
      en: 'Invitro Medical Services Platform',
      ru: 'Медицинская платформа Invitro'
    },
    role: {
      en: 'Team Lead & Technical Architect',
      ru: 'Тимлид и технический архитектор'
    },
    shortDescription: {
      en: 'Building a patient-facing platform for Moldova\'s largest medical lab network while integrating with a legacy CRM system full of duplicated data and architectural constraints.',
      ru: 'Разработка платформы для пациентов крупнейшей сети медлабораторий Молдовы с интеграцией в устаревшую CRM-систему, полную дублей и архитектурных ограничений.'
    },
    fullDescription: {
      en: 'Invitro Moldova, the country\'s leading private medical laboratory with 40+ branches, faced a critical bottleneck: all patient appointments, test bookings, and inquiries funneled through a single call center. Their outdated website wasn\'t user-friendly, and patients couldn\'t book online — let alone manage appointments for family members.\n\nThe business needed a modern platform where patients could register, book doctor appointments, schedule medical tests, and manage family accounts — reducing call center pressure while improving patient experience.\n\nI led a cross-functional team of 5-7 people (backend, frontend, designer, QA) through a year-long development cycle, reaching 80% completion before external factors led to project handoff.\n\nThe Real Challenge: Legacy CRM Integration\n\nThe biggest technical challenge wasn\'t building the new platform — it was integrating with Invitro\'s legacy CRM, which stored all critical data: patients, doctors, services, test catalogs with 4-5 levels of nested categories, and medical records. The system had duplicated patient records, inconsistent data structures, and limited API flexibility.\n\nWe needed to migrate data into a new architecture while maintaining continuous two-way synchronization — without disrupting Invitro\'s daily operations.\n\nOur Technical Solution\n\nAfter deep system analysis and team brainstorming, we designed a smart deduplication and synchronization strategy using master-slave record architecture with queue-based asynchronous processing. This allowed us to resolve thousands of duplicate patient records while maintaining data integrity and real-time sync.\n\nWe chose Laravel + Livewire over React/Vue primarily for development speed — critical given the tight timeline. Livewire handled AJAX interactions efficiently without the overhead of a separate frontend framework. TNTSearch enabled fast full-text search across 2,000+ medical tests with deep category hierarchies.\n\nProject Management Approach\n\nRan 2-week sprints with a co-located team. Weekly retrospectives and flexible prioritization allowed us to adapt as requirements evolved. I worked closely with QA to ensure they understood complex medical workflows and edge cases. Client sync calls were frequent initially, then shifted to weekly sprint reviews as trust built.\n\nOutcome\n\nThe project reached 80% completion over ~12 months before being handed to another team. The blocking factor was the legacy API team\'s bandwidth to support new integration requirements — an external constraint beyond our control.\n\nWhile the platform didn\'t launch under our leadership, the project demonstrated deep expertise in legacy system integration, data migration strategy, and managing technical delivery under real-world constraints.',
      ru: 'Invitro Moldova, ведущая частная медицинская лаборатория страны с 40+ филиалами, столкнулась с критическим узким местом: все записи пациентов на приемы, анализы и запросы проходили через единый колл-центр. Устаревший сайт был неудобен, и пациенты не могли записаться онлайн — не говоря уже об управлении записями для членов семьи.\n\nБизнесу требовалась современная платформа, где пациенты могли бы регистрироваться, записываться к врачам, планировать анализы и управлять семейными аккаунтами — снижая нагрузку на колл-центр и улучшая пользовательский опыт.\n\nЯ руководил кросс-функциональной командой из 5-7 человек (backend, frontend, дизайнер, QA) в течение года разработки, достигнув 80% готовности до момента передачи проекта по внешним причинам.\n\nРеальный вызов: интеграция с legacy CRM\n\nГлавной технической сложностью была не разработка новой платформы — а интеграция с устаревшей CRM Invitro, где хранились все критически важные данные: пациенты, врачи, услуги, каталог анализов с 4-5 уровнями вложенных категорий и медицинские документы. В системе были дублированные записи пациентов, несогласованные структуры данных и ограниченная гибкость API.\n\nНам нужно было мигрировать данные в новую архитектуру с поддержкой непрерывной двусторонней синхронизации — не нарушая ежедневные операции Invitro.\n\nНаше техническое решение\n\nПосле глубокого анализа системы и мозговых штурмов команды, мы разработали умную стратегию дедупликации и синхронизации с использованием master-slave архитектуры записей и асинхронной обработки через очередь. Это позволило разрешить тысячи дублированных записей пациентов с сохранением целостности данных и синхронизации в реальном времени.\n\nМы выбрали Laravel + Livewire вместо React/Vue прежде всего из-за скорости разработки — критически важной при жёстких дедлайнах. Livewire эффективно обрабатывал AJAX-взаимодействия без накладных расходов отдельного frontend-фреймворка. TNTSearch обеспечил быстрый полнотекстовый поиск по 2000+ медицинским анализам с глубокой иерархией категорий.\n\nПодход к управлению проектом\n\nРаботали в 2-недельных спринтах с офисной командой. Еженедельные ретроспективы и гибкая приоритизация позволяли адаптироваться по мере изменения требований. Я плотно работал с QA, чтобы они понимали сложные медицинские workflow и граничные случаи. Созвоны с клиентом были частыми в начале, затем перешли к еженедельным спринт-ревью по мере роста доверия.\n\nИтог\n\nПроект достиг 80% готовности за ~12 месяцев, после чего был передан другой команде. Блокирующим фактором была пропускная способность команды legacy API для поддержки новых требований интеграции — внешнее ограничение вне нашего контроля.\n\nХотя платформа не была запущена под нашим руководством, проект продемонстрировал глубокую экспертизу в интеграции legacy-систем, стратегии миграции данных и управлении технической поставкой в условиях реальных ограничений.'
    },
    image: '/images/projects/invitro/hero.jpg',
    gallery: [
      '/images/projects/invitro/screenshot-1.jpg',
      '/images/projects/invitro/screenshot-2.jpg'
    ],
    technologies: ['PHP', 'Laravel', 'Livewire', 'Redis', 'TNTSearch', 'HTML', 'SCSS', 'Git'],

    clientContext: {
      en: 'Leading medical laboratory network in Moldova · 40+ branches across 30+ cities · 2,000+ diagnostic tests · 20+ medical specialties · High call center load with thousands of daily patient inquiries',
      ru: 'Ведущая сеть медицинских лабораторий в Молдове · 40+ филиалов в 30+ городах · 2000+ видов анализов · 20+ медицинских специальностей · Высокая нагрузка на колл-центр с тысячами ежедневных обращений пациентов'
    },

    technicalSolution: {
      en: {
        title: 'Technical Solution Architecture',
        description: 'To solve the legacy integration challenge, we designed a three-layer solution focused on data integrity, real-time synchronization, and user experience.',
        diagrams: [
          {
            id: 'architecture',
            title: 'System Architecture',
            diagramData: architectureDiagram,
            caption: 'Integrated new patient platform with 40+ year old legacy CRM while maintaining daily operations across 40+ branches'
          },
          {
            id: 'deduplication',
            title: 'Deduplication Engine',
            diagramData: deduplicationDiagram,
            caption: 'Intelligent deduplication system resolved thousands of duplicate patient records using master-slave architecture and queue-based processing'
          },
          {
            id: 'user-journey',
            title: 'Patient Experience',
            diagramData: userJourneyDiagram,
            caption: 'Transformed patient experience from phone-dependent bookings to 24/7 self-service platform with family account management'
          }
        ]
      },
      ru: {
        title: 'Архитектура технического решения',
        description: 'Для решения задачи интеграции с legacy-системой мы разработали трёхуровневое решение с фокусом на целостность данных, синхронизацию в реальном времени и пользовательский опыт.',
        diagrams: [
          {
            id: 'architecture',
            title: 'Архитектура системы',
            image: '/images/projects/invitro/diagram-architecture-ru.png',
            caption: 'Интеграция новой платформы для пациентов с устаревшей CRM, работающей 40+ лет, без остановки ежедневных операций в 40+ филиалах'
          },
          {
            id: 'deduplication',
            title: 'Движок дедупликации',
            image: '/images/projects/invitro/diagram-deduplication-ru.png',
            caption: 'Интеллектуальная система дедупликации разрешила тысячи дублирующихся записей пациентов с использованием master-slave архитектуры и обработки через очередь'
          },
          {
            id: 'user-journey',
            title: 'Опыт пациента',
            image: '/images/projects/invitro/diagram-user-journey-ru.png',
            caption: 'Трансформировали опыт пациентов с телефонных записей на платформу самообслуживания 24/7 с управлением семейными аккаунтами'
          }
        ]
      }
    },

    impact: {
      en: {
        metrics: [
          'Reached 80% project completion over 12-month timeline',
          'Designed deduplication system handling thousands of duplicate patient records',
          'Enabled search across 2,000+ medical tests with 4-5 category depth levels',
          'Managed team through 24+ two-week sprint cycles with consistent delivery'
        ],
        qualitative: [
          'Created reusable pattern for legacy system integration applicable to similar healthcare modernization projects',
          'Demonstrated technical leadership navigating external constraints and architectural complexity',
          'Built robust data migration strategy balancing automation with admin oversight',
          'Proved value of pragmatic technology choices (Livewire vs React/Vue) for accelerated delivery timelines'
        ]
      },
      ru: {
        metrics: [
          'Достигнута 80% готовность проекта за 12-месячный timeline',
          'Разработана система дедупликации для обработки тысяч дублированных записей пациентов',
          'Реализован поиск по 2000+ медицинским анализам с глубиной 4-5 уровней категорий',
          'Управлял командой через 24+ двухнедельных спринт-цикла с консистентной поставкой'
        ],
        qualitative: [
          'Создан переиспользуемый паттерн интеграции legacy-систем, применимый к аналогичным проектам модернизации healthcare',
          'Продемонстрировано техническое лидерство в навигации внешних ограничений и архитектурной сложности',
          'Построена надёжная стратегия миграции данных с балансом автоматизации и админского контроля',
          'Доказана ценность прагматичных технологических выборов (Livewire vs React/Vue) для ускорения timeline поставки'
        ]
      }
    },

    features: {
      en: [
        'Designed intelligent deduplication algorithm analyzing record recency, data richness, and phone/name matching to resolve thousands of duplicate patient records',
        'Implemented master-slave record architecture with queue-based asynchronous synchronization between new platform and legacy CRM',
        'Built admin dashboard for real-time monitoring and manual resolution of data conflicts during migration',
        'Integrated TNTSearch for fast full-text search across 2,000+ medical tests with 4-5 levels of nested categories',
        'Enabled family account management allowing users to book appointments for multiple family members',
        'Chose Laravel + Livewire stack to accelerate development timeline without sacrificing interactivity or maintainability'
      ],
      ru: [
        'Разработал интеллектуальный алгоритм дедупликации с анализом актуальности записей, полноты данных и сопоставления телефон/имя для разрешения тысяч дублей пациентов',
        'Реализовал master-slave архитектуру записей с асинхронной синхронизацией через очередь между новой платформой и legacy CRM',
        'Создал админ-панель для мониторинга в реальном времени и ручного разрешения конфликтов данных при миграции',
        'Интегрировал TNTSearch для быстрого полнотекстового поиска по 2000+ медицинским анализам с 4-5 уровнями вложенных категорий',
        'Реализовал управление семейными аккаунтами с возможностью записи на приём для нескольких членов семьи',
        'Выбрал стек Laravel + Livewire для ускорения разработки без ущерба интерактивности и поддерживаемости'
      ]
    },

    challenges: {
      en: [
        'Integrating with legacy CRM containing thousands of duplicate patient records with inconsistent data structures and limited API flexibility',
        'Maintaining continuous two-way data synchronization without disrupting daily operations across 40+ clinics',
        'External dependency: blocked by legacy API team\'s bandwidth to implement required integration endpoints',
        'Managing complex medical catalog with 4-5 levels of nested test categories requiring efficient search architecture'
      ],
      ru: [
        'Интеграция с legacy CRM, содержащей тысячи дублированных записей пациентов с несогласованными структурами данных и ограниченной гибкостью API',
        'Поддержание непрерывной двусторонней синхронизации данных без нарушения ежедневных операций в 40+ филиалах',
        'Внешняя зависимость: блокировка командой legacy API, не успевавшей реализовывать требуемые эндпоинты интеграции',
        'Управление сложным медицинским каталогом с 4-5 уровнями вложенных категорий анализов, требующим эффективной архитектуры поиска'
      ]
    },

    scope: {
      en: [
        'Led cross-functional team of 5-7 people (backend, frontend, designer, QA) through year-long development cycle',
        'Designed system architecture and data migration strategy for legacy CRM integration',
        'Ran 2-week sprints with weekly retrospectives and flexible prioritization responding to evolving requirements',
        'Coordinated with client stakeholders through regular sprint reviews after establishing trust',
        'Mentored QA team on complex medical workflows and edge case testing scenarios',
        'Made strategic technology decisions balancing speed-to-market with long-term maintainability'
      ],
      ru: [
        'Руководил кросс-функциональной командой из 5-7 человек (backend, frontend, дизайнер, QA) в течение года разработки',
        'Спроектировал архитектуру системы и стратегию миграции данных для интеграции с legacy CRM',
        'Вёл 2-недельные спринты с еженедельными ретроспективами и гибкой приоритизацией под меняющиеся требования',
        'Координировал работу со стейкхолдерами клиента через регулярные спринт-ревью после установления доверия',
        'Обучал QA-команду сложным медицинским workflow и сценариям тестирования граничных случаев',
        'Принимал стратегические технологические решения, балансируя скорость выхода с долгосрочной поддерживаемостью'
      ]
    },

    featured: true,
    year: 2023,
    liveUrl: 'https://www.invitro.md'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}
