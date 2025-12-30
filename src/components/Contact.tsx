'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { socials, email } from '@/data/socials';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/30 to-navy-900/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-400 uppercase tracking-widest text-sm font-medium">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-12">
            {t('description')}
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-4 px-8 py-5 glass rounded-2xl border border-gold-400/20 hover:border-gold-400/40 hover:bg-gold-400/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center glow-gold-sm group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-navy-950" />
            </div>
            <div className="text-left">
              <span className="text-muted text-sm block">{t('email')}</span>
              <span className="text-foreground font-medium text-lg">{email}</span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gold-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted text-sm uppercase tracking-widest mb-6">
            {t('socials')}
          </p>
          <div className="flex items-center justify-center gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-2xl glass border border-gold-400/20 flex items-center justify-center text-foreground/70 hover:text-gold-400 hover:border-gold-400/40 hover:bg-gold-400/5 transition-all duration-300"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
        />
      </div>
    </section>
  );
}
