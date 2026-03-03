import { useTranslations } from 'next-intl';

interface PersonSchemaProps {
  locale: 'en' | 'ru';
}

export default function PersonSchema({ locale }: PersonSchemaProps) {
  // Note: This component receives translations as props in server components
  // For now, we'll keep the structure but make it easy to extend

  const t = useTranslations('seo.person');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t('name'),
    alternateName: t('alternateName'),
    jobTitle: t('jobTitle'),
    description: t('description'),
    url: 'https://ddinisiuc.com',
    sameAs: [
      'https://github.com/flaming-flow',
      'https://www.linkedin.com/in/dinisiuc-daniil',
      'https://t.me/flaming_flow'
    ],
    email: 'ddinisiuc.web@gmail.com',
    knowsAbout: [
      'Software Architecture',
      'Technical Leadership',
      'Full-Stack Development',
      'Legacy System Integration',
      'Data Migration',
      'MVP Development',
      'Laravel',
      'Vue.js',
      'React',
      'Next.js',
      'TypeScript',
      'Team Coordination',
      'Product Development'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: t('occupation'),
      occupationLocation: {
        '@type': 'Country',
        name: t('occupationLocation')
      },
      skills: t('skills')
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Technical University'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
