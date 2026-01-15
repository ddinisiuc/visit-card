'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { socials } from '@/data/socials';
import { Heart } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold-400/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center glow-gold-sm group-hover:scale-110 transition-transform duration-300">
                <span className="text-navy-950 font-bold text-xl">D</span>
              </div>
              <span className="text-xl sm:text-2xl font-semibold text-foreground">
                Daniil<span className="text-gold-400">.</span>dev
              </span>
            </Link>
            <p className="text-muted text-sm max-w-xs">
              Tech partner helping founders turn ideas into shipped products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-foreground/70 hover:text-gold-400 transition-colors text-sm">
                Home
              </Link>
              <Link href="/#about" className="text-foreground/70 hover:text-gold-400 transition-colors text-sm">
                About
              </Link>
              <Link href="/projects" className="text-foreground/70 hover:text-gold-400 transition-colors text-sm">
                Projects
              </Link>
              <Link href="/#contact" className="text-foreground/70 hover:text-gold-400 transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl border border-gold-400/20 flex items-center justify-center text-foreground/70 hover:text-gold-400 hover:border-gold-400/40 hover:bg-gold-400/5 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-gold-400/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-muted text-sm">
            {currentYear} Daniil. {t('rights')}
          </p>
          <p className="text-muted text-sm flex items-center gap-2">
            {t('madeWith')} <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
