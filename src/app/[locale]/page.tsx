import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Fit from '@/components/Fit';
import About from '@/components/About';
import ProjectsGrid from '@/components/ProjectsGrid';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import PersonSchema from '@/components/PersonSchema';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PersonSchema locale={locale as 'en' | 'ru' | 'md'} />
      <Hero />
      <Fit />
      <About />
      <ProjectsGrid />
      <Testimonials />
      <Contact />
    </>
  );
}
