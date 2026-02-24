'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ProcessPhase {
  title: string;
  description: string;
  outcomes: string[];
}

interface TechnicalProcessProps {
  title: string;
  description: string;
  phases: ProcessPhase[];
}

export function TechnicalProcess({ title, description, phases }: TechnicalProcessProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
        {title}
      </h2>
      <p className="text-muted leading-relaxed text-lg mb-8">
        {description}
      </p>

      <div className="space-y-8 relative">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gold-400/40 via-gold-400/20 to-transparent hidden md:block" />

        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
          >
            <div className="flex gap-2.5 sm:gap-3 md:gap-6">
              {/* Phase number badge */}
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center font-bold text-navy-950 text-sm sm:text-base md:text-lg shadow-lg shadow-gold-400/20">
                  {index + 1}
                </div>
              </div>

              {/* Phase content */}
              <div className="flex-1 min-w-0 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-gold-400/10 hover:border-gold-400/20 transition-all duration-300">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-foreground break-words leading-tight">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 mb-3 sm:mb-4 leading-relaxed break-words hyphens-auto">
                  {phase.description}
                </p>

                {/* Outcomes list */}
                <div className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                  <div className="text-xs sm:text-sm font-medium text-gold-400 mb-1.5 sm:mb-2">
                    Key Outcomes:
                  </div>
                  {phase.outcomes.map((outcome, outcomeIndex) => (
                    <div
                      key={outcomeIndex}
                      className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/70"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="break-words hyphens-auto leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
