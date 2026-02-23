'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { Link } from '@/i18n/navigation';

interface CTAButton {
  text: string;
  url: string;
}

interface ProjectCTAProps {
  title: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton: CTAButton;
}

export function ProjectCTA({ title, description, primaryButton, secondaryButton }: ProjectCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-3xl p-8 md:p-12 border border-gold-400/20 bg-gradient-to-br from-gold-400/5 to-gold-500/5 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
        {title}
      </h2>
      <p className="text-muted text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href={primaryButton.url}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-semibold hover:from-gold-300 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-400/20 flex items-center gap-2 group"
        >
          {primaryButton.text}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

        <Link
          href={secondaryButton.url}
          className="px-8 py-4 rounded-xl border border-gold-400/30 text-foreground font-semibold hover:border-gold-400/60 hover:bg-gold-400/5 transition-all duration-300 flex items-center gap-2 group"
        >
          <Eye className="w-5 h-5" />
          {secondaryButton.text}
        </Link>
      </div>
    </motion.div>
  );
}
