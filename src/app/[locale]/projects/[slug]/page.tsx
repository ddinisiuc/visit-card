import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import ProjectDetail from './ProjectDetail';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
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

  return {
    title: `${project.title[localeKey]} | Daniil`,
    description: project.shortDescription[localeKey],
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

  return <ProjectDetail project={project} locale={locale as 'en' | 'ru'} />;
}
