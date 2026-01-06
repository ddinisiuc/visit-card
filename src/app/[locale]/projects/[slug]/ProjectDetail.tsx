'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Check, AlertTriangle, Briefcase } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Project } from '@/data/projects';

interface ProjectDetailProps {
  project: Project;
  locale: 'en' | 'ru';
}

export default function ProjectDetail({ project, locale }: ProjectDetailProps) {
  const t = useTranslations('projects.details');

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted hover:text-gold-400 transition-colors duration-300 mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{t('backToProjects')}</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 glass rounded-full text-xs font-medium text-gold-400 border border-gold-400/20">
              {project.year}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {project.title[locale]}
          </h1>
          <p className="text-xl text-muted max-w-3xl">
            {project.shortDescription[locale]}
          </p>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-video rounded-3xl overflow-hidden mb-16 glass border border-gold-400/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center mx-auto mb-4 border border-gold-400/20">
                <span className="text-gold-400 text-4xl font-bold">
                  {project.title[locale].charAt(0)}
                </span>
              </div>
              <p className="text-muted text-sm">Project Preview</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-40 h-40 border border-gold-400/10 rounded-full" />
          <div className="absolute bottom-8 left-8 w-24 h-24 border border-gold-400/10 rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
                {t('overview')}
              </h2>
              <p className="text-muted leading-relaxed text-lg">
                {project.fullDescription[locale]}
              </p>
            </div>

            {/* Challenges & Decisions - mini block */}
            <div className="glass rounded-2xl p-6 border border-gold-400/10">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-3 text-gold-400">
                <AlertTriangle className="w-5 h-5" />
                {t('challenges')}
              </h2>
              <ul className="space-y-3">
                {project.challenges[locale].map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60 mt-2 flex-shrink-0" />
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* My Role / Scope */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
                {t('scope')}
              </h2>
              <ul className="space-y-4">
                {project.scope[locale].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Briefcase className="w-3 h-3 text-gold-400" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
                {t('features')}
              </h2>
              <ul className="space-y-4">
                {project.features[locale].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold-400" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Technologies */}
            <div className="glass rounded-2xl p-6 border border-gold-400/10">
              <h3 className="text-lg font-semibold mb-4 text-gold-400">
                {t('technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-navy-800/50 text-foreground/80 text-sm border border-navy-700/50 hover:border-gold-400/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="glass rounded-2xl p-6 border border-gold-400/10 space-y-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-semibold hover:from-gold-300 hover:to-gold-400 transition-all duration-300 group"
                >
                  <span>{t('liveDemo')}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-gold-400/30 text-foreground font-semibold hover:border-gold-400/60 hover:bg-gold-400/5 transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    {t('sourceCode')}
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
