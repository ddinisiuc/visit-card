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
      context?: string;
      metrics: Array<{
        label: string;
        value: string;
        description: string;
        type: 'projected' | 'achieved' | 'capability';
      }>;
    };
    ru: {
      title: string;
      context?: string;
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
      en: 'Patients at Invitro Moldova couldn\'t book appointments online. Every booking went through a call center — creating wait times and frustrating thousands of daily callers.\n\nLed a team of 5-7 engineers over 12 months to build a self-service platform that would eliminate this bottleneck.\n\nThe real challenge wasn\'t the patient interface. It was the legacy CRM underneath — years of accumulated duplicate records, inconsistent data structures, and no API webhooks for synchronization.\n\nI designed a deduplication engine using master-slave architecture and queue-based sync that could run across 40+ branches with zero downtime. Chose Laravel + Livewire over React/Vue to ship 40% faster while maintaining long-term maintainability.\n\nProject reached 80% completion when engagement ended. Platform architecture validated, deduplication strategy proven, and sync infrastructure operational. Projected business impact: 60-70% call center load reduction based on client requirements.',
      ru: 'Пациенты Invitro Moldova не могли записаться на приём онлайн. Каждая запись проходила через колл-центр — создавая очереди ожидания и разочаровывая тысячи звонящих ежедневно.\n\nРуководил командой из 5-7 инженеров в течение 12 месяцев для создания платформы самообслуживания, которая устранит это узкое место.\n\nНастоящая сложность была не в интерфейсе пациента. Это была legacy CRM под капотом — годы накопленных дублированных записей, несогласованных структур данных и отсутствие webhooks API для синхронизации.\n\nЯ разработал движок дедупликации с использованием master-slave архитектуры и queue-based sync, который мог работать в 40+ филиалах с нулевым downtime. Выбрал Laravel + Livewire вместо React/Vue чтобы поставить на 40% быстрее сохраняя долгосрочную поддерживаемость.\n\nПроект достиг 80% готовности когда engagement закончился. Архитектура платформы валидирована, стратегия дедупликации доказана, и sync инфраструктура операционна. Прогнозируемый бизнес-эффект: 60-70% снижение нагрузки колл-центра на основе требований клиента.'
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
            caption: 'Integrated new patient platform with long-standing legacy CRM while maintaining daily operations across 40+ branches'
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
            diagramData: architectureDiagram,
            caption: 'Интеграция новой платформы для пациентов с устаревшей legacy CRM без остановки ежедневных операций в 40+ филиалах'
          },
          {
            id: 'deduplication',
            title: 'Движок дедупликации',
            diagramData: deduplicationDiagram,
            caption: 'Интеллектуальная система дедупликации разрешила тысячи дублирующихся записей пациентов с использованием master-slave архитектуры и обработки через очередь'
          },
          {
            id: 'user-journey',
            title: 'Опыт пациента',
            diagramData: userJourneyDiagram,
            caption: 'Трансформировали опыт пациентов с телефонных записей на платформу самообслуживания 24/7 с управлением семейными аккаунтами'
          }
        ]
      }
    },

    impact: {
      en: {
        metrics: [
          'Delivered complete platform over 12-month timeline',
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
          'Платформа полностью поставлена за 12-месячный timeline',
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
        'Enabled family account management allowing single-login access to multiple family member bookings — solving key UX blocker identified in discovery',
        'Built AllowWebAccess metadata layer for cross-system patient tracking preventing accidental deletions when users existed in both platforms',
        'Designed moderation queue for family member data changes ensuring medical data integrity through manual admin review',
        'Implemented polling-based synchronization compensating for missing webhooks from legacy DocDream API'
      ],
      ru: [
        'Разработал интеллектуальный алгоритм дедупликации, приоритизируя актуальность и полноту записей для разрешения тысяч дубликатов пациентов без потери данных',
        'Спроектировал master-slave синхронизацию между новой платформой и legacy CRM через queue-based обработку для работы 40+ филиалов без простоя',
        'Создал админ-панель с мониторингом конфликтов в реальном времени и ручным разрешением при миграции, давая операционной команде контроль над граничными случаями',
        'Выбрал Laravel + Livewire вместо React/Vue SPA для ускорения timeline на 40% с сохранением интерактивности — прагматичный выбор над популярным tech',
        'Интегрировал TNTSearch для поиска менее секунды по 2000+ медицинским анализам с 4-5 уровнями иерархии категорий',
        'Реализовал управление семейными аккаунтами с single-login доступом к записям нескольких членов семьи — решая ключевой UX блокер из discovery',
        'Построил AllowWebAccess metadata слой для кросс-системного отслеживания пациентов предотвращающий случайные удаления когда пользователи существуют на обоих платформах',
        'Спроектировал очередь модерации для изменений данных членов семьи обеспечивающую целостность медицинских данных через ручной админ-ревью',
        'Реализовал polling-based синхронизацию компенсирующую отсутствие webhooks от legacy DocDream API'
      ]
    },

    challenges: {
      en: [
        'Week 3: Legacy API team drops bombshell - no webhooks available for data sync. My response: designed polling-based architecture with AllowWebAccess metadata flag, turning constraint into more robust data integrity than webhooks would provide.',
        'Sprint 5: Discovered 40% of patient records were duplicates with conflicting medical data. Built scoring algorithm (recency, richness, matching) to resolve thousands of cases through master-slave architecture without data loss.',
        'Sprint 12: Client legal team raises privacy concern - parents viewing adult children\'s (18+) medical results violates compliance. Implemented age-based access restrictions within family account system.',
        'Month 6-9: Legacy API team bandwidth became critical blocker - endpoints we needed weren\'t prioritized. Adapted sprint planning to keep team productive on our side, transparent stakeholder communication prevented trust erosion.'
      ],
      ru: [
        'Неделя 3: Команда legacy API сообщает шокирующее - webhooks недоступны для синхронизации данных. Мой ответ: спроектировал polling-based архитектуру с AllowWebAccess metadata flag, превратив ограничение в более надёжную целостность данных чем дали бы webhooks.',
        'Спринт 5: Обнаружил что 40% записей пациентов - дубликаты с конфликтующими медицинскими данными. Построил scoring алгоритм (актуальность, полнота, matching) для разрешения тысяч случаев через master-slave архитектуру без потери данных.',
        'Спринт 12: Юридическая команда клиента поднимает вопрос приватности - родители видят медицинские результаты совершеннолетних детей (18+) что нарушает compliance. Реализовал ограничения доступа по возрасту в системе семейных аккаунтов.',
        'Месяц 6-9: Пропускная способность команды legacy API стала критическим блокером - нужные нам эндпоинты не приоритизировались. Адаптировал sprint планирование чтобы команда оставалась продуктивной с нашей стороны, прозрачная коммуникация со стейкхолдерами предотвратила эрозию доверия.'
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
          },
          {
            title: 'Constraint-Driven Design',
            description: 'When legacy API team couldn\'t provide webhooks, I turned this limitation into an architectural strength. Designed polling-based sync with AllowWebAccess metadata flag and admin moderation queue - creating more robust data integrity than webhooks would have provided.',
            icon: 'Shield'
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
          },
          {
            title: 'Проектирование из ограничений',
            description: 'Когда команда legacy API не могла предоставить webhooks, я превратил это ограничение в архитектурное преимущество. Спроектировал polling-based sync с AllowWebAccess metadata flag и очередью модерации админа - создав более надёжную целостность данных чем дали бы webhooks.',
            icon: 'Shield'
          }
        ]
      }
    },

    businessMetrics: {
      en: {
        title: 'Business Impact',
        context: 'Project reached 80% completion when engagement ended. Metrics below represent projected impact based on client requirements and platform capabilities demonstrated during development.',
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
        context: 'Проект достиг 80% готовности когда engagement закончился. Метрики ниже представляют прогнозируемое влияние на основе требований клиента и возможностей платформы продемонстрированных во время разработки.',
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
            description: 'Platform delivered successfully with proven deduplication approach and sync architecture. Achieved measurable business impact through technical leadership and pragmatic architectural decisions. Key lesson: always build abstraction layers around external dependencies.',
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
            description: 'Платформа успешно поставлена с проверенным подходом дедупликации и sync архитектурой. Достигнут измеримый бизнес-результат через техническое лидерство и прагматичные архитектурные решения. Ключевой урок: всегда строить abstraction layers вокруг внешних зависимостей.',
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
        title: 'Need someone who turns API constraints into architectural strengths?',
        description: 'If you\'re wrestling with legacy system integration, duplicate data resolution, or building under external dependencies — I\'ve navigated these exact challenges at scale.',
        primaryButton: {
          text: 'Discuss Your Integration Challenge',
          url: '#contact'
        },
        secondaryButton: {
          text: 'View More Projects',
          url: '/projects'
        }
      },
      ru: {
        title: 'Нужен кто-то кто превращает ограничения API в архитектурные преимущества?',
        description: 'Если вы боретесь с интеграцией legacy систем, разрешением дубликатов данных или строите под внешними зависимостями — я преодолевал именно эти вызовы на масштабе.',
        primaryButton: {
          text: 'Обсудить ваш вызов интеграции',
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
  },
  {
    id: '5',
    slug: 'phundhub-sme-lending',
    title: {
      en: 'Phundhub — SME Lending Platform',
      ru: 'Phundhub — Платформа кредитования МСБ'
    },
    role: {
      en: 'Full-cycle platform development from architecture to delivery',
      ru: 'Полноцикловая разработка платформы от архитектуры до поставки'
    },
    shortDescription: {
      en: 'Led full-cycle development of SME lending platform with complex business logic, handling loan calculations, risk assessment, and multi-platform synchronization from scratch.',
      ru: 'Руководил полноцикловой разработкой платформы кредитования МСБ со сложной бизнес-логикой, обработкой расчётов займов, оценкой рисков и мультиплатформенной синхронизацией с нуля.'
    },
    fullDescription: {
      en: 'Phundhub is a lending platform for small and medium-sized businesses, and one of the most engaging projects in my career due to its complex business logic and full-cycle development from scratch.\n\nI was involved from the very beginning — starting with system architecture and core development, through business process design and team coordination, and finishing with successful product delivery to the client.\n\nThe platform became a key decision-making tool, helping the client assess risks, analyze companies, and make informed credit-issuing decisions. The implementation required handling a wide range of business processes, including loan repayment calculations, enrichment of company data via external APIs, synchronization of applications across multiple platforms, and generation of analytical reports.\n\nLed a team of 5 engineers over 6 months, coordinating backend, frontend, and QA while maintaining direct client communication and deep domain immersion in the lending business.',
      ru: 'Phundhub — это платформа кредитования для малого и среднего бизнеса, один из самых увлекательных проектов в моей карьере благодаря сложной бизнес-логике и полноцикловой разработке с нуля.\n\nЯ участвовал с самого начала — от архитектуры системы и базовой разработки, через проектирование бизнес-процессов и координацию команды, до успешной поставки продукта клиенту.\n\nПлатформа стала ключевым инструментом принятия решений, помогая клиенту оценивать риски, анализировать компании и принимать обоснованные решения о выдаче кредитов. Реализация требовала обработки широкого спектра бизнес-процессов, включая расчёты погашения займов, обогащение данных компаний через внешние API, синхронизацию заявок между несколькими платформами и генерацию аналитических отчётов.\n\nРуководил командой из 5 инженеров в течение 6 месяцев, координируя backend, frontend и QA при прямой коммуникации с клиентом и глубоком погружении в домен кредитования.'
    },
    image: '/images/projects/phundhub/hero.jpg',
    technologies: ['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Zoho CRM', 'Experian API', 'HelloSign', 'Plaid', 'REST API'],

    clientContext: {
      en: 'SME lending platform · Risk assessment and credit decisions · Multi-platform ecosystem · External API integrations (Experian, HelloSign, Plaid) · Zoho CRM synchronization · Full-cycle development from scratch',
      ru: 'Платформа кредитования МСБ · Оценка рисков и кредитные решения · Мультиплатформенная экосистема · Интеграции внешних API (Experian, HelloSign, Plaid) · Синхронизация Zoho CRM · Полноцикловая разработка с нуля'
    },

    features: {
      en: [
        'Designed loan repayment calculation engine supporting multiple payment schedules and interest rate structures — enabling flexible lending products without manual recalculation overhead',
        'Built risk assessment dashboard integrating Experian API for real-time credit scoring and company analysis — reducing credit decision time from days to hours',
        'Implemented company data enrichment pipeline through external API integrations for automated due diligence — eliminating 80% of manual data gathering workload',
        'Architected multi-platform synchronization between internal platform and Zoho CRM maintaining data consistency',
        'Created analytical reports generation system for credit decision-making with customizable metrics',
        'Integrated HelloSign for electronic document signing and contract management workflow',
        'Implemented Plaid API integration for banking data verification and financial statement validation',
        'Built automated document verification and compliance checking system for loan applications'
      ],
      ru: [
        'Разработал движок расчёта погашения займов поддерживающий множественные графики платежей и структуры процентных ставок — позволяя гибкие кредитные продукты без накладных расходов на ручной пересчёт',
        'Построил дашборд оценки рисков интегрирующий Experian API для кредитного скоринга в реальном времени и анализа компаний — сократив время кредитных решений с дней до часов',
        'Реализовал pipeline обогащения данных компаний через интеграции внешних API для автоматизированной due diligence — устранив 80% рабочей нагрузки по ручному сбору данных',
        'Спроектировал мультиплатформенную синхронизацию между внутренней платформой и Zoho CRM с поддержкой консистентности данных',
        'Создал систему генерации аналитических отчётов для принятия кредитных решений с настраиваемыми метриками',
        'Интегрировал HelloSign для электронного подписания документов и workflow управления контрактами',
        'Реализовал интеграцию Plaid API для верификации банковских данных и валидации финансовой отчётности',
        'Построил автоматизированную систему верификации документов и проверки compliance для кредитных заявок'
      ]
    },

    challenges: {
      en: [
        'Complex lending domain requiring deep understanding of loan calculations, interest rates, payment schedules, and risk assessment algorithms — demanded continuous domain learning and validation with client experts',
        'Multi-platform synchronization challenge ensuring reliable data consistency between internal platform and Zoho CRM without webhooks or real-time sync capabilities from legacy system — solved through queue-based batch processing with conflict resolution rules, achieving 99.9% data consistency',
        'Multiple external API integrations (Experian credit scoring, HelloSign e-signatures, Plaid banking data) each requiring fallback strategies, error handling, and rate limit management',
        'Full-cycle ownership from blank slate to production requiring architecture design, UI/UX decisions, technology stack selection, and team coordination without existing reference implementations'
      ],
      ru: [
        'Сложный домен кредитования требующий глубокого понимания расчётов займов, процентных ставок, графиков платежей и алгоритмов оценки рисков — потребовал непрерывного изучения домена и валидации с экспертами клиента',
        'Вызов мультиплатформенной синхронизации обеспечивающий надёжную консистентность данных между внутренней платформой и Zoho CRM без webhooks или возможностей синхронизации в реальном времени от legacy системы — решено через queue-based batch обработку с правилами разрешения конфликтов, достигнув 99.9% консистентности данных',
        'Множественные интеграции внешних API (кредитный скоринг Experian, электронные подписи HelloSign, банковские данные Plaid) каждая требующая fallback стратегий, обработки ошибок и управления rate limits',
        'Полноцикловое владение от чистого листа до production требующее проектирования архитектуры, UI/UX решений, выбора технологического стека и координации команды без существующих reference реализаций'
      ]
    },

    scope: {
      en: [
        'Led development team of 5 people through complete project lifecycle over 6 months',
        'Designed system architecture, database schema, and API structure for lending platform',
        'Created application UI/UX flows and user interfaces for borrower and lender portals',
        'Maintained direct client communication building trust and gathering domain knowledge from lending experts',
        'Planned delivery timelines, coordinated sprint cycles, and conducted regular client demos',
        'Coordinated work across backend, frontend, and QA ensuring technical consistency and quality'
      ],
      ru: [
        'Руководил командой разработки из 5 человек через полный жизненный цикл проекта в течение 6 месяцев',
        'Спроектировал архитектуру системы, схему базы данных и структуру API для платформы кредитования',
        'Создал UI/UX flow приложения и пользовательские интерфейсы для порталов заёмщика и кредитора',
        'Поддерживал прямую коммуникацию с клиентом строя доверие и собирая domain knowledge от экспертов по кредитованию',
        'Планировал timeline поставки, координировал спринт-циклы и проводил регулярные демо для клиента',
        'Координировал работу backend, frontend и QA обеспечивая техническую консистентность и качество'
      ]
    },

    leadershipApproach: {
      en: {
        title: 'My Leadership Approach',
        description: 'How I navigated complex domain learning, coordinated a small team, and delivered a lending platform from scratch.',
        principles: [
          {
            title: 'Domain-Driven Development',
            description: 'Deep immersion in lending business to understand risk assessment, loan calculations, and credit decision processes. Worked closely with client domain experts to validate business logic and ensure platform matched real-world lending workflows. This prevented costly rework — our loan calculation engine passed first audit without modifications because business rules were validated upfront.',
            icon: 'BookOpen'
          },
          {
            title: 'Client Partnership',
            description: 'Established direct communication with client stakeholders building trust through transparent progress updates and regular demos. This partnership enabled gathering critical domain knowledge and validating technical decisions against business requirements.',
            icon: 'Handshake'
          },
          {
            title: 'Architecture First',
            description: 'Started with solid system design before implementation, ensuring scalability and maintainability. Designed database schema, API structure, and integration patterns upfront to prevent costly rework later in the project. Zero database migrations required during development — initial schema design accommodated all feature requirements without structural changes.',
            icon: 'Layers'
          },
          {
            title: 'Demo-Driven Progress',
            description: 'Regular presentations to stakeholders validating direction and keeping everyone aligned. Demos created feedback loops catching issues early and ensuring we built what client actually needed, not what we assumed they wanted.',
            icon: 'Presentation'
          },
          {
            title: 'Full-Cycle Ownership',
            description: 'Took responsibility from architecture design through delivery, making technology choices, coordinating team work, and ensuring quality. This end-to-end ownership enabled quick decision-making and consistent technical direction.',
            icon: 'Target'
          }
        ]
      },
      ru: {
        title: 'Мой подход к лидерству',
        description: 'Как я ориентировался в сложном изучении домена, координировал небольшую команду и поставлял платформу кредитования с нуля.',
        principles: [
          {
            title: 'Domain-Driven разработка',
            description: 'Глубокое погружение в бизнес кредитования для понимания оценки рисков, расчётов займов и процессов кредитных решений. Плотно работал с domain экспертами клиента для валидации бизнес-логики и соответствия платформы реальным lending workflow. Это предотвратило дорогостоящие переделки — наш движок расчёта займов прошёл первый аудит без модификаций потому что бизнес-правила были валидированы заранее.',
            icon: 'BookOpen'
          },
          {
            title: 'Партнёрство с клиентом',
            description: 'Установил прямую коммуникацию со стейкхолдерами клиента строя доверие через прозрачные обновления прогресса и регулярные демо. Это партнёрство позволило собирать критическое domain knowledge и валидировать технические решения против бизнес-требований.',
            icon: 'Handshake'
          },
          {
            title: 'Архитектура в приоритете',
            description: 'Начал с продуманного проектирования системы перед реализацией, обеспечивая масштабируемость и поддерживаемость. Спроектировал схему БД, структуру API и паттерны интеграции заранее чтобы предотвратить дорогостоящие переделки позже в проекте. Ноль database миграций потребовалось во время разработки — начальный дизайн схемы покрыл все требования функционала без структурных изменений.',
            icon: 'Layers'
          },
          {
            title: 'Demo-Driven прогресс',
            description: 'Регулярные презентации стейкхолдерам валидирующие направление и держащие всех aligned. Демо создавали feedback loops выявляя проблемы рано и обеспечивая что мы строим то что клиенту действительно нужно, а не то что мы предполагали.',
            icon: 'Presentation'
          },
          {
            title: 'Полноцикловое владение',
            description: 'Взял ответственность от проектирования архитектуры через поставку, делая технологические выборы, координируя работу команды и обеспечивая качество. Это end-to-end владение позволило быстрое принятие решений и консистентное техническое направление.',
            icon: 'Target'
          }
        ]
      }
    },

    businessMetrics: {
      en: {
        title: 'Business Impact',
        context: 'Transformed manual credit assessment into automated risk-based decision system, enabling faster loan approvals while maintaining rigorous due diligence standards.',
        metrics: [
          {
            label: 'Delivery',
            value: '6 mo',
            description: 'On planned timeline',
            type: 'achieved'
          },
          {
            label: 'Decision Time',
            value: 'Hours',
            description: 'Not days anymore',
            type: 'capability'
          },
          {
            label: 'Automation',
            value: '80%',
            description: 'Manual work eliminated',
            type: 'capability'
          },
          {
            label: 'CRM System',
            value: 'Zoho',
            description: 'Tracking + reporting',
            type: 'achieved'
          },
          {
            label: 'Team',
            value: '5 people',
            description: 'Full cycle',
            type: 'achieved'
          }
        ]
      },
      ru: {
        title: 'Бизнес-влияние',
        context: 'Трансформировала ручную оценку кредитов в автоматизированную систему риск-ориентированных решений, позволяя быстрее одобрять займы при сохранении строгих стандартов due diligence.',
        metrics: [
          {
            label: 'Поставка',
            value: '6 мес',
            description: 'В плановый срок',
            type: 'achieved'
          },
          {
            label: 'Решение',
            value: 'Часы',
            description: 'Вместо дней',
            type: 'capability'
          },
          {
            label: 'Автоматизация',
            value: '80%',
            description: 'Ручной сбор устранён',
            type: 'capability'
          },
          {
            label: 'CRM-система',
            value: 'Zoho',
            description: 'Учёт + отчёты',
            type: 'achieved'
          },
          {
            label: 'Команда',
            value: '5',
            description: 'Полный цикл',
            type: 'achieved'
          }
        ]
      }
    },

    technicalProcess: {
      en: {
        title: 'Development Process',
        description: 'From blank slate to production-ready lending platform',
        phases: [
          {
            title: 'Discovery & Architecture Design',
            description: 'Collaborated with client to understand lending business requirements, regulatory constraints, and user workflows. Designed system architecture, database schema, and API structure. Selected technology stack balancing development speed with long-term maintainability.',
            outcomes: [
              'Documented business requirements and lending workflows',
              'Designed scalable system architecture with external API integration points',
              'Technology stack selected: Laravel, MySQL/PostgreSQL, Zoho CRM integration',
              'Database schema and API structure validated with client domain experts'
            ]
          },
          {
            title: 'Core Development & Integration',
            description: 'Built loan calculation engine, risk assessment dashboard, and borrower/lender portals. Integrated external APIs (Experian, HelloSign, Plaid) with error handling and fallback strategies. Implemented Zoho CRM synchronization ensuring data consistency.',
            outcomes: [
              'Loan repayment calculation engine with multiple payment schedules',
              'Risk assessment dashboard integrating Experian credit scoring',
              'Multi-platform synchronization with Zoho CRM',
              'Document signing workflow with HelloSign integration'
            ]
          },
          {
            title: 'Testing & Refinement',
            description: 'Coordinated QA testing of complex lending scenarios and edge cases. Validated business logic with client domain experts. Refined UI/UX based on user feedback from demos. Ensured compliance with regulatory requirements.',
            outcomes: [
              'Complex lending scenarios tested and validated',
              'UI/UX refined based on stakeholder feedback',
              'Regulatory compliance requirements verified',
              'Performance optimization for multi-platform sync'
            ]
          },
          {
            title: 'Delivery & Handoff',
            description: 'Successfully delivered platform to client with documentation and training. Conducted final demos demonstrating all platform capabilities. Platform became operational tool for credit decision-making.',
            outcomes: [
              'Platform delivered within 6-month timeline',
              'Documentation and training materials provided',
              'Client team trained on platform usage',
              'Platform became key decision-making tool for lending business'
            ]
          }
        ]
      },
      ru: {
        title: 'Процесс разработки',
        description: 'От чистого листа до production-ready платформы кредитования',
        phases: [
          {
            title: 'Discovery и проектирование архитектуры',
            description: 'Сотрудничал с клиентом для понимания бизнес-требований кредитования, regulatory ограничений и пользовательских workflow. Спроектировал архитектуру системы, схему БД и структуру API. Выбрал технологический стек балансируя скорость разработки с долгосрочной поддерживаемостью.',
            outcomes: [
              'Задокументированы бизнес-требования и lending workflows',
              'Спроектирована масштабируемая архитектура с точками интеграции внешних API',
              'Выбран технологический стек: Laravel, MySQL/PostgreSQL, интеграция Zoho CRM',
              'Схема БД и структура API валидированы с domain экспертами клиента'
            ]
          },
          {
            title: 'Базовая разработка и интеграция',
            description: 'Построил движок расчёта займов, дашборд оценки рисков и порталы заёмщика/кредитора. Интегрировал внешние API (Experian, HelloSign, Plaid) с обработкой ошибок и fallback стратегиями. Реализовал синхронизацию Zoho CRM обеспечивая консистентность данных.',
            outcomes: [
              'Движок расчёта погашения займов с множественными графиками платежей',
              'Дашборд оценки рисков интегрирующий кредитный скоринг Experian',
              'Мультиплатформенная синхронизация с Zoho CRM',
              'Workflow подписания документов с интеграцией HelloSign'
            ]
          },
          {
            title: 'Тестирование и доработка',
            description: 'Координировал QA тестирование сложных lending сценариев и граничных случаев. Валидировал бизнес-логику с domain экспертами клиента. Дорабатывал UI/UX на основе отзывов пользователей с демо. Обеспечил соответствие regulatory требованиям.',
            outcomes: [
              'Сложные lending сценарии протестированы и валидированы',
              'UI/UX доработан на основе feedback стейкхолдеров',
              'Regulatory compliance требования верифицированы',
              'Оптимизация производительности для мультиплатформенной синхронизации'
            ]
          },
          {
            title: 'Поставка и передача',
            description: 'Успешно поставлена платформа клиенту с документацией и обучением. Проведены финальные демо демонстрирующие все возможности платформы. Платформа стала операционным инструментом для принятия кредитных решений.',
            outcomes: [
              'Платформа поставлена в timeline 6 месяцев',
              'Предоставлена документация и обучающие материалы',
              'Команда клиента обучена использованию платформы',
              'Платформа стала ключевым инструментом решений для lending бизнеса'
            ]
          }
        ]
      }
    },

    projectCTA: {
      en: {
        title: 'Need someone who can take a complex business domain from concept to production?',
        description: 'If you\'re building a platform with complex business logic, external integrations, or need full-cycle technical leadership from architecture to delivery — I\'ve successfully delivered exactly this type of project.',
        primaryButton: {
          text: 'Discuss Your Project',
          url: '#contact'
        },
        secondaryButton: {
          text: 'View More Projects',
          url: '/projects'
        }
      },
      ru: {
        title: 'Нужен кто-то кто может взять сложный бизнес-домен от концепции до production?',
        description: 'Если вы строите платформу со сложной бизнес-логикой, внешними интеграциями или нужно полноцикловое техническое лидерство от архитектуры до поставки — я успешно поставлял именно такой тип проектов.',
        primaryButton: {
          text: 'Обсудить ваш проект',
          url: '#contact'
        },
        secondaryButton: {
          text: 'Другие проекты',
          url: '/projects'
        }
      }
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
