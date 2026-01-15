'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import ProjectCard from './ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

interface ProjectsGridProps {
  showAll?: boolean;
}

export default function ProjectsGrid({ showAll = false }: ProjectsGridProps) {
  const t = useTranslations('projects');
  const projects = getFeaturedProjects();
  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-navy-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-gold-400 uppercase tracking-widest text-sm font-medium">
            {t('subtitle')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            {t('title')}
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all link */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 glass rounded-full border border-gold-400/20 hover:border-gold-400/40 hover:bg-gold-400/5 text-gold-400 font-medium transition-all duration-300 group"
            >
              <span>{t('viewAll')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
