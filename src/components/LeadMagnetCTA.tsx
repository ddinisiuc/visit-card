'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Download, Check } from 'lucide-react';
import Link from 'next/link';

export default function LeadMagnetCTA() {
  const t = useTranslations('leadMagnetCTA');
  const params = useParams();
  const locale = params.locale || 'en';

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto border border-gold-400/20"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center border border-gold-400/20">
              <Download className="w-8 h-8 text-gold-400" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <span className="text-gold-400 uppercase tracking-widest text-xs font-medium">
                {t('title')}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-3">
                {t('heading')}
              </h3>
              <p className="text-muted text-sm sm:text-base mb-4">
                {t('description')}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {['0', '1', '2'].map((index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">
                      {t(`benefits.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={`/${locale}/lead-magnet`}
                className="inline-block px-6 py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-semibold rounded-xl hover:from-gold-500 hover:to-gold-600 transition-all duration-300"
              >
                {t('cta')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
