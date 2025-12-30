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
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 uppercase tracking-widest text-sm font-medium">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            {t('title')}
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full border border-gold-400/20 hover:border-gold-400/40 hover:bg-gold-400/5 text-gold-400 font-medium transition-all duration-300 group"
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
