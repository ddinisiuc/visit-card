'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface InteractiveChecklistProps {
  email: string;
}

type ChecklistState = Record<string, boolean>;

export default function InteractiveChecklist({ email }: InteractiveChecklistProps) {
  const t = useTranslations('leadMagnet.checklist');
  const [checkedItems, setCheckedItems] = useState<ChecklistState>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    problemDefinition: true,
    mvpScope: false,
    techStack: false,
    teamNeeds: false,
    timeline: false,
  });

  const sections = [
    { key: 'problemDefinition', itemCount: 7 },
    { key: 'mvpScope', itemCount: 8 },
    { key: 'techStack', itemCount: 8 },
    { key: 'teamNeeds', itemCount: 7 },
    { key: 'timeline', itemCount: 8 },
  ];

  const totalItems = sections.reduce((sum, section) => sum + section.itemCount, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((completedItems / totalItems) * 100);

  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const toggleItem = (itemKey: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('title'),
          text: 'Check out this helpful Technical Discovery Checklist for founders!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {t('title')}
        </h2>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted">{t('progressLabel')}</span>
            <span className="text-sm font-semibold text-gold-400">
              {completedItems}/{totalItems} ({progress}%)
            </span>
          </div>
          <div className="w-full h-3 bg-navy-900/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-400 to-gold-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* PDF download button hidden - to be implemented later */}
          {/* <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-gold-400/20 hover:border-gold-400/40 transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            {t('downloadButton')}
          </button> */}
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-gold-400/20 hover:border-gold-400/40 transition-colors text-sm"
          >
            <Share2 className="w-4 h-4" />
            {t('shareButton')}
          </button>
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="space-y-4">
        {sections.map((section) => {
          const sectionCompletedItems = Array.from({ length: section.itemCount }, (_, i) =>
            checkedItems[`${section.key}-${i}`]
          ).filter(Boolean).length;
          const sectionProgress = Math.round((sectionCompletedItems / section.itemCount) * 100);

          return (
            <motion.div
              key={section.key}
              className="glass rounded-xl overflow-hidden border border-gold-400/10"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.key)}
                className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gold-400/5 transition-colors"
              >
                <div className="flex-1 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {t(`sections.${section.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted">
                    {t(`sections.${section.key}.description`)}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-20 sm:w-32 h-1.5 bg-navy-900/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gold-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${sectionProgress}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted">
                      {sectionCompletedItems}/{section.itemCount}
                    </span>
                  </div>
                </div>
                {expandedSections[section.key] ? (
                  <ChevronUp className="w-5 h-5 text-gold-400 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted ml-4" />
                )}
              </button>

              {/* Section Items */}
              <AnimatePresence>
                {expandedSections[section.key] && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 space-y-2">
                      {Array.from({ length: section.itemCount }, (_, i) => {
                        const itemKey = `${section.key}-${i}`;
                        const isChecked = checkedItems[itemKey] || false;

                        return (
                          <label
                            key={itemKey}
                            className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-gold-400/10 border border-gold-400/20'
                                : 'hover:bg-navy-900/30 border border-transparent'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleItem(itemKey)}
                              className="sr-only"
                            />
                            <div className="flex-shrink-0 mt-0.5">
                              {isChecked ? (
                                <CheckCircle2 className="w-5 h-5 text-gold-400" />
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-muted" />
                              )}
                            </div>
                            <span className={`text-sm ${isChecked ? 'text-foreground line-through opacity-70' : 'text-foreground/90'}`}>
                              {t(`sections.${section.key}.items.${i}`)}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Success Message */}
      {progress === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 glass-strong rounded-2xl p-6 sm:p-8 text-center border border-gold-400/30"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-400/20 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-gold-400" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            {t('successMessage.title')}
          </h3>
          <p className="text-muted mb-1">
            {t('successMessage.description')}
          </p>
          <p className="text-gold-400 font-semibold mb-6">{email}</p>

          <div className="max-w-md mx-auto mb-6">
            <h4 className="text-sm font-semibold text-gold-400 mb-3">
              {t('successMessage.nextSteps.title')}
            </h4>
            <ul className="space-y-2 text-sm text-left">
              {['items.0', 'items.1', 'items.2'].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gold-400">•</span>
                  <span className="text-foreground/90">
                    {t(`successMessage.nextSteps.${item}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-semibold rounded-xl hover:from-gold-500 hover:to-gold-600 transition-all duration-300"
          >
            {t('successMessage.nextSteps.cta')}
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}
