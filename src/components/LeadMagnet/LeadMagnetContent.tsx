'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import EmailCaptureForm from './EmailCaptureForm';
import InteractiveChecklist from './InteractiveChecklist';

export default function LeadMagnetContent() {
  const t = useTranslations('leadMagnet');
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const handleEmailSubmit = (email: string) => {
    setSubmittedEmail(email);
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-80 sm:h-80 bg-navy-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        {!submittedEmail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-gold-400 uppercase tracking-widest text-sm font-medium">
              {t('subtitle')}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 max-w-4xl mx-auto">
              {t('title')}
            </h1>
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
              {t('description')}
            </p>
          </motion.div>
        )}

        {/* Content */}
        {!submittedEmail ? (
          <EmailCaptureForm onSubmit={handleEmailSubmit} />
        ) : (
          <InteractiveChecklist email={submittedEmail} />
        )}
      </div>
    </section>
  );
}
