import { Project } from '@/data/projects';

interface ProjectSchemaProps {
  project: Project;
  locale: 'en' | 'ru';
}

export default function ProjectSchema({ project, locale }: ProjectSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title[locale],
    description: project.shortDescription[locale],
    author: {
      '@type': 'Person',
      name: 'Daniil',
      jobTitle: locale === 'en'
        ? 'Technical Lead & Software Architect'
        : 'Технический лидер и архитектор ПО',
      description: locale === 'en'
        ? 'Tech Lead specializing in legacy system integration, data migration, and scalable architecture design'
        : 'Тех лид специализирующийся на интеграции legacy-систем, миграции данных и проектировании масштабируемой архитектуры',
    },
    datePublished: `${project.year}-01-01`,
    keywords: [
      'technical leadership',
      'legacy system integration',
      'data migration',
      'software architecture',
      ...project.technologies,
    ].join(', '),
    about: {
      '@type': 'Thing',
      name: 'Software Development Case Study',
    },
    workExample: project.liveUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
