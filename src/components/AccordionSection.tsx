'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionSection({ title, icon, children, defaultOpen = false }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="glass rounded-xl sm:rounded-2xl border border-gold-400/10 overflow-hidden">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full px-3 py-3.5 sm:px-6 sm:py-5 flex items-center justify-between gap-2 sm:gap-4 hover:bg-gold-400/5 transition-colors duration-300 group min-h-[44px]"
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {icon && (
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0 border border-gold-400/20 group-hover:border-gold-400/40 transition-colors duration-300">
              {icon}
            </div>
          )}
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-foreground text-left break-words hyphens-auto leading-tight">
            {title}
          </h2>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
        </motion.div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-4 pt-2 sm:px-6 sm:pb-6 border-t border-gold-400/10">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
