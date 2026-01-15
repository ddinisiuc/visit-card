import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Fit from '@/components/Fit';
import About from '@/components/About';
import ProjectsGrid from '@/components/ProjectsGrid';
import Contact from '@/components/Contact';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Fit />
      <About />
      <ProjectsGrid />
      <Contact />
    </>
  );
}
