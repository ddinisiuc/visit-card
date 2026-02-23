import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import ProjectDetail from './ProjectDetail';
import ProjectSchema from '@/components/ProjectSchema';

export function generateStaticParams() {
  const locales = ['en', 'ru'];
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const localeKey = locale as 'en' | 'ru';
  const isInvitro = project.slug === 'invitro-medical-platform';

  // Enhanced title для InVitro с leadership keywords
  const seoTitle = isInvitro
    ? `${project.title[localeKey]} - Technical Lead Case Study | Legacy Integration & Team Leadership | Daniil`
    : `${project.title[localeKey]} | Daniil`;

  // 155-char SEO description
  const seoDescription = isInvitro
    ? 'Led team through legacy CRM integration solving duplicate data chaos. Zero-downtime migration for 40+ clinics. Technical leadership case study.'
    : project.shortDescription[localeKey];

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: isInvitro
      ? 'technical lead, legacy system integration, team leadership, data migration, deduplication, healthcare software, Laravel, software architecture'
      : project.technologies.join(', '),
    authors: [{ name: 'Daniil' }],

    // Open Graph для соц. сетей
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      images: [{
        url: project.image,
        width: 1200,
        height: 630,
        alt: project.title[localeKey],
      }],
      siteName: 'Daniil | Tech Lead & Architect',
      locale: locale,
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [project.image],
    },

    // Canonical URLs
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        'en': `/en/projects/${slug}`,
        'ru': `/ru/projects/${slug}`,
      },
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectSchema project={project} locale={locale as 'en' | 'ru'} />
      <ProjectDetail project={project} locale={locale as 'en' | 'ru'} />
    </>
  );
}
