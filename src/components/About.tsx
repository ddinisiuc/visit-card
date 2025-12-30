'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Compass, Users, MessageSquare, Calendar, Code2, Server, Cloud } from 'lucide-react';

const whatILead = [
  { icon: Compass, name: 'Architecture' },
  { icon: Calendar, name: 'Delivery & Planning' },
  { icon: Users, name: 'Team Coordination' },
  { icon: MessageSquare, name: 'Client Communication' },
];

const whatWeUse = [
  { icon: Code2, name: 'PHP / Laravel / Symfony' },
  { icon: Server, name: 'Vue.js' },
  { icon: Cloud, name: 'Cloud, Docker, CI/CD' },
];

const stats = [
  { value: '5+', key: 'experience' },
  { value: '50+', key: 'projects' },
  { value: '30+', key: 'clients' },
];

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-900/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold-400 uppercase tracking-widest text-sm font-medium">
            {t('title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t('subtitle')}
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t('description')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted text-sm uppercase tracking-wider">
                {t(`stats.${stat.key}`)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How I Work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-xl font-semibold mb-10 text-foreground/80">
            {t('skills')}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What I Lead */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-lg font-medium text-gold-400 mb-6 uppercase tracking-wider">
                {t('whatILead')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatILead.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group glass rounded-xl p-4 hover:border-gold-400/30 transition-all duration-300 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center group-hover:from-gold-400/30 group-hover:to-gold-500/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="font-medium text-foreground">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What We Use */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-lg font-medium text-foreground/60 mb-6 uppercase tracking-wider">
                {t('whatWeUse')}
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {whatWeUse.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group glass rounded-xl p-4 hover:border-gold-400/30 transition-all duration-300 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-800/50 flex items-center justify-center group-hover:bg-navy-700/50 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-foreground/60" />
                    </div>
                    <span className="text-muted">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
