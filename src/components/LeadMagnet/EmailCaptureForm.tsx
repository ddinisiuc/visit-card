'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';

interface EmailCaptureFormProps {
  onSubmit: (email: string) => void;
}

export default function EmailCaptureForm({ onSubmit }: EmailCaptureFormProps) {
  const t = useTranslations('leadMagnet.emailForm');
  const params = useParams();
  const locale = params.locale as string || 'en';
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          locale
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit');
      }

      setIsLoading(false);
      onSubmit(email);
    } catch (err) {
      setIsLoading(false);
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
      console.error('Error submitting form:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-strong rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          {t('title')}
        </h2>
        <p className="text-muted text-sm sm:text-base">
          {t('subtitle')}
        </p>
      </div>

      {/* Benefits */}
      <div className="mb-8 glass rounded-xl p-4 sm:p-6">
        <h3 className="text-sm font-semibold text-gold-400 mb-3">
          {t('benefits.title')}
        </h3>
        <ul className="space-y-2">
          {['items.0', 'items.1', 'items.2'].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">
                {t(`benefits.${item}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              className="w-full pl-12 pr-4 py-3 sm:py-4 bg-navy-900/50 border border-gold-400/20 rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold-400/50 transition-colors"
              required
            />
          </div>
          {error && (
            <p className="text-red-400 text-sm mt-2">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-semibold py-3 sm:py-4 rounded-xl hover:from-gold-500 hover:to-gold-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? t('submitting') : t('submitButton')}
        </button>
      </form>

      {/* Privacy */}
      <p className="text-center text-xs text-muted mt-4">
        {t('privacy')}
      </p>
    </motion.div>
  );
}
