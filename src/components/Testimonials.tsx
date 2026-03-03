'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { getFeaturedTestimonials } from '@/data/testimonials';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const params = useParams();
  const locale = (params.locale as 'en' | 'ru' | 'md') || 'en';
  const testimonials = getFeaturedTestimonials();

  // Check environment variable to see if testimonials should be shown
  const showTestimonials = process.env.NEXT_PUBLIC_SHOW_TESTIMONIALS === 'true';

  if (!showTestimonials) {
    return null;
  }

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-navy-600/20 rounded-full blur-3xl" />

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

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative glass rounded-2xl p-6 sm:p-8 border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-gold-400" />
              </div>

              {/* Testimonial text */}
              <div className="relative mb-6">
                <p className="text-foreground/90 text-sm sm:text-base italic leading-relaxed">
                  "{testimonial.testimonial[locale]}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-400/20">
                  <span className="text-gold-400 font-bold text-lg">
                    {testimonial.name[locale].charAt(0)}
                  </span>
                </div>

                {/* Name and role */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-foreground font-semibold text-sm sm:text-base truncate">
                    {testimonial.name[locale]}
                  </h4>
                  <p className="text-gold-400/70 text-xs sm:text-sm truncate">
                    {testimonial.role[locale]}
                  </p>
                  <p className="text-muted text-xs truncate">
                    {testimonial.company[locale]}
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gold-400/5 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
