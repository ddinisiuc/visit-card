'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const t = useTranslations('projects');
  const params = useParams();
  const locale = (params.locale as 'en' | 'ru') || 'en';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.article
          whileHover={{ y: -10 }}
          className="group relative h-full glass rounded-3xl overflow-hidden border border-gold-400/10 hover:border-gold-400/30 transition-all duration-500"
        >
          {/* Image placeholder with gradient */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />

            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-32 h-32 border border-gold-400/30 rounded-full" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border border-gold-400/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gold-400/10 rounded-full" />
            </div>

            {/* Year badge */}
            <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-medium text-gold-400">
              {project.year}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gold-400 transition-colors duration-300">
              {project.title[locale]}
            </h3>
            <p className="text-gold-400/70 text-xs uppercase tracking-wider mb-3">
              {project.role[locale]}
            </p>

            <p className="text-muted text-sm mb-4 line-clamp-2">
              {project.shortDescription[locale]}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-navy-800/50 text-muted/80 border border-navy-700/50"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs px-2 py-1 rounded-full bg-navy-800/50 text-gold-400/80 border border-gold-400/20">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* View project link */}
            <div className="flex items-center gap-2 text-gold-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
              <span>{t('viewProject')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-gold-400/5 to-transparent" />
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
