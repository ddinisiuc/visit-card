export interface Project {
  id: string;
  slug: string;
  title: {
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
    shortDescription: {
      en: 'A modern, full-featured e-commerce solution with real-time inventory and AI-powered recommendations.',
      ru: 'Современное полнофункциональное решение для электронной коммерции с учётом запасов в реальном времени и рекомендациями на основе ИИ.'
    },
    fullDescription: {
      en: 'Built a comprehensive e-commerce platform from the ground up, featuring a microservices architecture, real-time inventory management, and machine learning-powered product recommendations. The platform handles thousands of concurrent users with sub-second response times.',
      ru: 'Создал комплексную платформу электронной коммерции с нуля, включающую микросервисную архитектуру, управление запасами в реальном времени и рекомендации продуктов на основе машинного обучения. Платформа обслуживает тысячи одновременных пользователей со временем отклика менее секунды.'
    },
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    features: {
      en: [
        'Real-time inventory tracking',
        'AI-powered product recommendations',
        'Multi-currency support',
        'Advanced analytics dashboard',
        'Mobile-first responsive design'
      ],
      ru: [
        'Отслеживание запасов в реальном времени',
        'Рекомендации товаров на основе ИИ',
        'Поддержка мультивалютности',
        'Продвинутая панель аналитики',
        'Мобильно-ориентированный адаптивный дизайн'
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
    shortDescription: {
      en: 'Collaborative project management tool with real-time updates and team analytics.',
      ru: 'Инструмент для совместного управления проектами с обновлениями в реальном времени и аналитикой команды.'
    },
    fullDescription: {
      en: 'Developed a sophisticated task management application designed for modern teams. Features include real-time collaboration, customizable workflows, time tracking, and comprehensive reporting. Built with performance and scalability in mind.',
      ru: 'Разработал сложное приложение для управления задачами, предназначенное для современных команд. Включает совместную работу в реальном времени, настраиваемые рабочие процессы, отслеживание времени и комплексную отчётность.'
    },
    image: '/images/projects/taskmanager.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'GraphQL'],
    features: {
      en: [
        'Real-time collaboration',
        'Kanban and Gantt views',
        'Time tracking & reporting',
        'Custom workflow automation',
        'Third-party integrations'
      ],
      ru: [
        'Совместная работа в реальном времени',
        'Kanban и диаграммы Ганта',
        'Отслеживание времени и отчётность',
        'Автоматизация рабочих процессов',
        'Интеграции со сторонними сервисами'
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
    shortDescription: {
      en: 'Real-time financial analytics platform with advanced data visualization.',
      ru: 'Платформа финансовой аналитики в реальном времени с продвинутой визуализацией данных.'
    },
    fullDescription: {
      en: 'Created an enterprise-grade financial analytics dashboard that processes millions of transactions daily. Features advanced charting, predictive analytics, and customizable reporting tools for financial institutions.',
      ru: 'Создал корпоративную панель финансовой аналитики, обрабатывающую миллионы транзакций ежедневно. Включает продвинутые графики, прогнозную аналитику и настраиваемые инструменты отчётности.'
    },
    image: '/images/projects/fintech.jpg',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'TimescaleDB', 'D3.js'],
    features: {
      en: [
        'Real-time data streaming',
        'Advanced chart visualizations',
        'Predictive analytics',
        'Custom report builder',
        'Role-based access control'
      ],
      ru: [
        'Потоковая передача данных в реальном времени',
        'Продвинутые визуализации графиков',
        'Прогнозная аналитика',
        'Конструктор отчётов',
        'Контроль доступа на основе ролей'
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
