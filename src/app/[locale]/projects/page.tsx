import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import ProjectsGrid from '@/components/ProjectsGrid';

export async function generateMetadata() {
  return {
    title: "Projects | Daniil",
    description: "Explore my portfolio of web development projects, featuring modern full-stack applications.",
  };
}

function ProjectsContent() {
  const t = useTranslations('projects');

  return (
    <div className="pt-32 min-h-screen">
      <ProjectsGrid showAll={true} />
    </div>
  );
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsContent />;
}
