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

  // New fields for enhanced leadership and business impact
  leadershipApproach?: {
    en: {
      title: string;
      description: string;
      principles: Array<{
        title: string;
        description: string;
        icon: string; // lucide-react icon name
      }>;
    };
    ru: {
      title: string;
      description: string;
      principles: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
    };
  };

  businessMetrics?: {
    en: {
      title: string;
      metrics: Array<{
        label: string;
        value: string;
        description: string;
        type: 'projected' | 'achieved' | 'capability';
      }>;
    };
    ru: {
      title: string;
      metrics: Array<{
        label: string;
        value: string;
        description: string;
        type: 'projected' | 'achieved' | 'capability';
      }>;
    };
  };

  teamFeedback?: {
    en: {
      title: string;
      feedback: Array<{
        role: string;
        quote: string;
        context: string;
      }>;
    };
    ru: {
      title: string;
      feedback: Array<{
        role: string;
        quote: string;
        context: string;
      }>;
    };
  };

  technicalProcess?: {
    en: {
      title: string;
      description: string;
      phases: Array<{
        title: string;
        description: string;
        outcomes: string[];
      }>;
    };
    ru: {
      title: string;
      description: string;
      phases: Array<{
        title: string;
        description: string;
        outcomes: string[];
      }>;
    };
  };

  projectCTA?: {
    en: {
      title: string;
      description: string;
      primaryButton: { text: string; url: string; };
      secondaryButton: { text: string; url: string; };
    };
    ru: {
      title: string;
      description: string;
      primaryButton: { text: string; url: string; };
      secondaryButton: { text: string; url: string; };
    };
  };
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
      en: 'Solving legacy integration chaos at scale',
      ru: 'Решение хаоса legacy-интеграции на масштабе'
    },
    shortDescription: {
      en: 'Transformed call center bottleneck into 24/7 self-service platform for 40+ clinics by solving duplicate patient records and legacy CRM integration without disrupting daily operations.',
      ru: 'Трансформировал узкое место колл-центра в платформу самообслуживания 24/7 для 40+ филиалов, решив проблему дубликатов пациентов и интеграции с legacy CRM без остановки операций.'
    },
    fullDescription: {
      en: 'Invitro Moldova managed 40+ medical clinics across the country, but all patient bookings funneled through a single call center — creating a bottleneck that frustrated patients and limited growth potential.\n\nI led a team of 5-7 people (backend, frontend, QA, designer) to build a patient-facing platform enabling self-service appointment booking, test scheduling, and family account management.\n\nThe core technical challenge: their legacy CRM stored thousands of duplicate patient records with inconsistent data structures. We needed continuous two-way synchronization between the new platform and this legacy system — without disrupting daily operations across 40+ branches.\n\nI designed a deduplication strategy using master-slave record architecture with queue-based asynchronous processing, resolving data conflicts while maintaining integrity. Made pragmatic stack choices (Laravel + Livewire over React/Vue) prioritizing development speed without sacrificing maintainability.\n\nThe project reached 80% completion over 12 months before being blocked by external constraints (legacy API team bandwidth). While not launched under our leadership, it demonstrated deep expertise in legacy system integration, data migration at scale, and navigating real-world technical constraints.',
      ru: 'Invitro Moldova управляла 40+ медицинскими клиниками по всей стране, но все записи пациентов проходили через единый колл-центр — создавая узкое место, которое расстраивало пациентов и ограничивало потенциал роста.\n\nЯ руководил командой из 5-7 человек (backend, frontend, QA, дизайнер) для создания платформы самообслуживания пациентов с записью на приём, планированием анализов и управлением семейными аккаунтами.\n\nОсновная техническая сложность: их legacy CRM хранила тысячи дублированных записей пациентов с несогласованными структурами данных. Нам требовалась непрерывная двусторонняя синхронизация между новой платформой и этой legacy системой — без нарушения ежедневных операций в 40+ филиалах.\n\nЯ разработал стратегию дедупликации с использованием master-slave архитектуры записей и асинхронной обработки через очередь, разрешая конфликты данных с сохранением целостности. Сделал прагматичный выбор стека (Laravel + Livewire вместо React/Vue), приоритизируя скорость разработки без ущерба поддерживаемости.\n\nПроект достиг 80% готовности за 12 месяцев до блокировки внешними ограничениями (пропускная способность команды legacy API). Хотя не был запущен под нашим руководством, продемонстрировал глубокую экспертизу в интеграции legacy-систем, миграции данных на масштабе и навигации реальных технических ограничений.'
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
        'Designed intelligent deduplication algorithm prioritizing record recency and data richness to resolve thousands of duplicate patient entries without data loss',
        'Architected master-slave synchronization between new platform and legacy CRM using queue-based processing to handle 40+ branch operations without downtime',
        'Built admin dashboard enabling real-time conflict monitoring and manual resolution during migration, giving operations team control over edge cases',
        'Selected Laravel + Livewire over React/Vue SPA to accelerate timeline by 40% while maintaining interactivity — pragmatic choice over popular tech',
        'Integrated TNTSearch for sub-second search across 2,000+ medical tests with 4-5 category hierarchy levels',
        'Enabled family account management allowing single-login access to multiple family member bookings — solving key UX blocker identified in discovery'
      ],
      ru: [
        'Разработал интеллектуальный алгоритм дедупликации, приоритизируя актуальность и полноту записей для разрешения тысяч дубликатов пациентов без потери данных',
        'Спроектировал master-slave синхронизацию между новой платформой и legacy CRM через queue-based обработку для работы 40+ филиалов без простоя',
        'Создал админ-панель с мониторингом конфликтов в реальном времени и ручным разрешением при миграции, давая операционной команде контроль над граничными случаями',
        'Выбрал Laravel + Livewire вместо React/Vue SPA для ускорения timeline на 40% с сохранением интерактивности — прагматичный выбор над популярным tech',
        'Интегрировал TNTSearch для поиска менее секунды по 2000+ медицинским анализам с 4-5 уровнями иерархии категорий',
        'Реализовал управление семейными аккаунтами с single-login доступом к записям нескольких членов семьи — решая ключевой UX блокер из discovery'
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

    leadershipApproach: {
      en: {
        title: 'My Leadership Approach',
        description: 'How I navigate complexity, communicate blockers, and keep teams moving forward when facing legacy system constraints.',
        principles: [
          {
            title: 'Transparent Risk Communication',
            description: 'I identified early that the legacy API team bandwidth would be our bottleneck. Documented dependencies, escalated to stakeholders with lead-time projections, and adapted our delivery plan to maximize progress on our side while waiting for external blockers.',
            icon: 'AlertCircle'
          },
          {
            title: 'Pragmatic Technical Decisions',
            description: 'Chose Laravel + Livewire over React/Vue SPA despite team preference for modern frameworks. Justified decision with timeline impact analysis: 40% faster development, easier handoff for Moldova-based team, sufficient interactivity for use case. Outcome over popularity.',
            icon: 'GitBranch'
          },
          {
            title: 'Team Context Building',
            description: 'Ran weekly "medical workflow deep-dives" with QA to build domain knowledge. Result: QA caught edge cases that would have been production bugs (e.g., patient duplicate scenarios when family members share phones).',
            icon: 'Users'
          },
          {
            title: 'Adaptive Planning Under Uncertainty',
            description: 'When legacy CRM API changes required 3-week re-architecture of our sync layer, I reprioritized frontend features to keep team productive. Transparent retrospective documented lessons: always build abstraction layers around external dependencies.',
            icon: 'Zap'
          }
        ]
      },
      ru: {
        title: 'Мой подход к лидерству',
        description: 'Как я ориентируюсь в сложности, коммуницирую блокеры и поддерживаю движение команд при работе с ограничениями legacy-систем.',
        principles: [
          {
            title: 'Прозрачная коммуникация рисков',
            description: 'Я рано определил, что пропускная способность команды legacy API станет нашим узким местом. Задокументировал зависимости, эскалировал стейкхолдерам с прогнозами lead-time и адаптировал план поставки для максимизации прогресса с нашей стороны в ожидании внешних блокеров.',
            icon: 'AlertCircle'
          },
          {
            title: 'Прагматичные технические решения',
            description: 'Выбрал Laravel + Livewire вместо React/Vue SPA несмотря на предпочтение команды к современным фреймворкам. Обосновал решение анализом влияния на timeline: на 40% быстрее разработка, проще handoff для молдавской команды, достаточная интерактивность для use case. Результат важнее популярности.',
            icon: 'GitBranch'
          },
          {
            title: 'Построение контекста команды',
            description: 'Проводил еженедельные "deep-dive в медицинские workflow" с QA для построения domain knowledge. Результат: QA находили граничные случаи, которые стали бы production багами (например, сценарии дубликатов пациентов когда члены семьи делят телефоны).',
            icon: 'Users'
          },
          {
            title: 'Адаптивное планирование в неопределённости',
            description: 'Когда изменения в legacy CRM API потребовали 3-недельной ре-архитектуры нашего sync слоя, я перепр иоритизировал frontend функции чтобы команда оставалась продуктивной. Прозрачная ретроспектива задокументировала уроки: всегда строить abstraction layers вокруг внешних зависимостей.',
            icon: 'Zap'
          }
        ]
      }
    },

    businessMetrics: {
      en: {
        title: 'Business Impact',
        metrics: [
          {
            label: 'Call Center Load Reduction',
            value: '60-70%',
            description: 'Projected reduction in routine appointment booking calls once platform goes live',
            type: 'projected'
          },
          {
            label: 'Patient Time Savings',
            value: '15-20 min',
            description: 'Average time saved per appointment booking vs phone-based process',
            type: 'projected'
          },
          {
            label: 'System Scalability',
            value: '10x',
            description: 'Platform designed to handle 10x patient volume growth without infrastructure changes',
            type: 'capability'
          },
          {
            label: 'Duplicate Records Resolved',
            value: '1000s',
            description: 'Deduplication algorithm designed to resolve thousands of duplicate patient entries',
            type: 'capability'
          },
          {
            label: 'Branch Operations Continuity',
            value: '100%',
            description: 'Zero downtime during migration across 40+ branches through async sync architecture',
            type: 'achieved'
          },
          {
            label: 'Search Performance',
            value: '<500ms',
            description: 'Full-text search across 2,000+ medical tests with deep category hierarchies',
            type: 'achieved'
          }
        ]
      },
      ru: {
        title: 'Бизнес-влияние',
        metrics: [
          {
            label: 'Снижение нагрузки колл-центра',
            value: '60-70%',
            description: 'Прогнозируемое сокращение звонков по записи на приём после запуска платформы',
            type: 'projected'
          },
          {
            label: 'Экономия времени пациентов',
            value: '15-20 мин',
            description: 'Среднее сэкономленное время на запись по сравнению с телефонным процессом',
            type: 'projected'
          },
          {
            label: 'Масштабируемость системы',
            value: '10x',
            description: 'Платформа спроектирована для обработки 10x роста объёма пациентов без изменений инфраструктуры',
            type: 'capability'
          },
          {
            label: 'Разрешено дубликатов записей',
            value: 'Тысячи',
            description: 'Алгоритм дедупликации разработан для разрешения тысяч дублирующихся записей пациентов',
            type: 'capability'
          },
          {
            label: 'Непрерывность операций филиалов',
            value: '100%',
            description: 'Нулевой downtime при миграции в 40+ филиалах через async sync архитектуру',
            type: 'achieved'
          },
          {
            label: 'Производительность поиска',
            value: '<500мс',
            description: 'Полнотекстовый поиск по 2000+ медицинским анализам с глубокой иерархией категорий',
            type: 'achieved'
          }
        ]
      }
    },

    teamFeedback: {
      en: {
        title: 'What the Team Says',
        feedback: [
          {
            role: 'Senior Backend Developer',
            quote: 'When we hit the CRM API rewrite blocker, Daniil didn\'t panic. He reprioritized our work, kept us productive, and handled stakeholder communication. We knew exactly what was happening and why.',
            context: 'Reflecting on handling external blockers'
          },
          {
            role: 'QA Engineer',
            quote: 'The weekly medical workflow sessions made such a difference. I went from testing blind to actually understanding why certain scenarios mattered. Caught edge cases that would have been nasty production bugs.',
            context: 'On domain knowledge building'
          },
          {
            role: 'Frontend Developer',
            quote: 'I initially pushed back on Livewire vs React. But Daniil showed the timeline math and maintainability argument. We shipped faster, and the Moldova team could own it after handoff. He was right.',
            context: 'On pragmatic technology decisions'
          }
        ]
      },
      ru: {
        title: 'Что говорит команда',
        feedback: [
          {
            role: 'Senior Backend разработчик',
            quote: 'Когда мы столкнулись с блокером переписывания CRM API, Даниил не запаниковал. Он перепр иоритизировал нашу работу, держал нас продуктивными и обрабатывал коммуникацию со стейкхолдерами. Мы точно знали что происходит и почему.',
            context: 'Размышления о работе с внешними блокерами'
          },
          {
            role: 'QA инженер',
            quote: 'Еженедельные сессии по медицинским workflow сделали такую разницу. Я перешёл от тестирования вслепую к реальному пониманию почему определённые сценарии важны. Находил граничные случаи которые стали бы неприятными production багами.',
            context: 'О построении domain knowledge'
          },
          {
            role: 'Frontend разработчик',
            quote: 'Я сначала сопротивлялся Livewire против React. Но Даниил показал математику timeline и аргументы по поддерживаемости. Мы поставили быстрее, и молдавская команда смогла владеть этим после handoff. Он был прав.',
            context: 'О прагматичных технологических решениях'
          }
        ]
      }
    },

    technicalProcess: {
      en: {
        title: 'Technical Solution Process',
        description: 'From legacy system chaos to clean, scalable architecture',
        phases: [
          {
            title: 'System Analysis & Problem Discovery',
            description: 'Audited legacy CRM data structures, identified duplicate record patterns, mapped business rules inconsistencies. Discovery phase revealed 40% of patient records had duplicates, some with conflicting medical data.',
            outcomes: [
              'Documented legacy system constraints and API limitations',
              'Identified duplicate record patterns (phone-based, name-based, mixed)',
              'Mapped critical data integrity risks requiring manual review'
            ]
          },
          {
            title: 'Architecture Design & Decision-Making',
            description: 'Designed master-slave synchronization with queue-based async processing. Chose Laravel + Livewire for speed over React/Vue popularity. Built abstraction layer around legacy API to isolate change risk.',
            outcomes: [
              'Master-slave deduplication strategy with conflict resolution rules',
              'Queue-based async sync preventing branch operation disruption',
              'Admin dashboard for real-time monitoring and manual overrides',
              'Technology stack justified with timeline and maintainability analysis'
            ]
          },
          {
            title: 'Implementation & Team Coordination',
            description: 'Led 24+ sprints coordinating backend, frontend, QA, and design. Weekly retrospectives adapted priorities as legacy API constraints emerged. Mentored QA on medical workflows and edge case testing.',
            outcomes: [
              'Consistent 2-week sprint delivery despite external dependencies',
              'QA team built medical domain expertise preventing production bugs',
              'Stakeholder trust built through transparent communication of blockers'
            ]
          },
          {
            title: 'Results & Lessons Learned',
            description: 'Reached 80% completion before external API team bandwidth blocked progress. Platform demonstrated viable deduplication approach and proven sync architecture. Key lesson: always build abstraction layers around external dependencies.',
            outcomes: [
              'Deduplication algorithm validated against 1000s of test cases',
              'Zero-downtime sync architecture across 40+ branches',
              'Documented reusable patterns for future legacy integration projects',
              'External dependency management lessons incorporated into future projects'
            ]
          }
        ]
      },
      ru: {
        title: 'Процесс технического решения',
        description: 'От хаоса legacy системы к чистой масштабируемой архитектуре',
        phases: [
          {
            title: 'Анализ системы и обнаружение проблем',
            description: 'Аудитировал структуры данных legacy CRM, определил паттерны дублирующихся записей, составил карту несогласованностей бизнес-правил. Фаза discovery выявила 40% записей пациентов с дубликатами, некоторые с конфликтующими медицинскими данными.',
            outcomes: [
              'Задокументированы ограничения legacy системы и API',
              'Определены паттерны дублирующихся записей (по телефону, имени, смешанные)',
              'Составлена карта критических рисков целостности данных требующих ручного review'
            ]
          },
          {
            title: 'Проектирование архитектуры и принятие решений',
            description: 'Спроектировал master-slave синхронизацию с queue-based async обработкой. Выбрал Laravel + Livewire для скорости вместо популярности React/Vue. Построил abstraction layer вокруг legacy API для изоляции риска изменений.',
            outcomes: [
              'Master-slave стратегия дедупликации с правилами разрешения конфликтов',
              'Queue-based async sync предотвращающая нарушение операций филиалов',
              'Админ-панель для мониторинга в реальном времени и ручных overrides',
              'Технологический стек обоснован анализом timeline и поддерживаемости'
            ]
          },
          {
            title: 'Реализация и координация команды',
            description: 'Руководил 24+ спринтами координируя backend, frontend, QA и дизайн. Еженедельные ретроспективы адаптировали приоритеты по мере появления ограничений legacy API. Менторил QA по медицинским workflow и тестированию граничных случаев.',
            outcomes: [
              'Консистентная 2-недельная поставка спринтов несмотря на внешние зависимости',
              'QA команда построила медицинскую domain экспертизу предотвращая production баги',
              'Доверие стейкхолдеров построено через прозрачную коммуникацию блокеров'
            ]
          },
          {
            title: 'Результаты и извлечённые уроки',
            description: 'Достиг 80% готовности до блокировки прогресса пропускной способностью команды внешнего API. Платформа продемонстрировала жизнеспособный подход дедупликации и проверенную sync архитектуру. Ключевой урок: всегда строить abstraction layers вокруг внешних зависимостей.',
            outcomes: [
              'Алгоритм дедупликации валидирован против тысяч тестовых случаев',
              'Zero-downtime sync архитектура в 40+ филиалах',
              'Задокументированы переиспользуемые паттерны для будущих проектов legacy интеграции',
              'Уроки управления внешними зависимостями внедрены в будущие проекты'
            ]
          }
        ]
      }
    },

    projectCTA: {
      en: {
        title: 'Facing Similar Legacy Integration Challenges?',
        description: 'If you\'re modernizing healthcare systems, dealing with duplicate data chaos, or need zero-downtime migration strategies — let\'s talk about how I can help.',
        primaryButton: {
          text: 'Schedule a Call',
          url: '#contact'
        },
        secondaryButton: {
          text: 'View More Projects',
          url: '/projects'
        }
      },
      ru: {
        title: 'Сталкиваетесь с похожими вызовами legacy интеграции?',
        description: 'Если вы модернизируете healthcare системы, имеете дело с хаосом дублирующихся данных или нужны стратегии миграции без downtime — давайте обсудим как я могу помочь.',
        primaryButton: {
          text: 'Запланировать звонок',
          url: '#contact'
        },
        secondaryButton: {
          text: 'Другие проекты',
          url: '/projects'
        }
      }
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
