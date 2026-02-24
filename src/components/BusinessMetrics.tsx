'use client';

import { motion } from 'framer-motion';

interface BusinessMetric {
  label: string;
  value: string;
  description: string;
  type: 'projected' | 'achieved' | 'capability';
}

interface BusinessMetricsProps {
  title: string;
  metrics: BusinessMetric[];
  context?: string;
}

const typeColors = {
  projected: {
    badge: 'bg-blue-500/20 text-blue-400 border-blue-400/30',
    accent: 'text-blue-400',
    background: 'from-blue-500/10 to-blue-600/5'
  },
  achieved: {
    badge: 'bg-green-500/20 text-green-400 border-green-400/30',
    accent: 'text-green-400',
    background: 'from-green-500/10 to-green-600/5'
  },
  capability: {
    badge: 'bg-gold-400/20 text-gold-400 border-gold-400/30',
    accent: 'text-gold-400',
    background: 'from-gold-400/10 to-gold-500/5'
  }
};

const typeLabels = {
  projected: 'Projected',
  achieved: 'Achieved',
  capability: 'Capability'
};

export function BusinessMetrics({ title, metrics, context }: BusinessMetricsProps) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
        <span className="w-6 sm:w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex-shrink-0" />
        <span className="break-words">{title}</span>
      </h2>

      {context && (
        <div className="mb-4 sm:mb-6 px-3 py-2 sm:px-4 sm:py-3 rounded-lg glass border border-gold-400/20">
          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed break-words hyphens-auto">
            {context}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {metrics.map((metric, index) => {
          const colors = typeColors[metric.type];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-6 border border-gold-400/10 hover:border-gold-400/20 transition-all duration-300 bg-gradient-to-br ${colors.background}`}
            >
              <div className="flex items-start justify-between mb-2 sm:mb-3 gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs md:text-sm text-muted font-medium break-words hyphens-auto leading-tight" lang="ru">
                  {metric.label}
                </span>
                <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border ${colors.badge} font-medium whitespace-nowrap flex-shrink-0`}>
                  {typeLabels[metric.type]}
                </span>
              </div>

              <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 ${colors.accent} break-words`}>
                {metric.value}
              </div>

              <p className="text-[11px] sm:text-xs md:text-sm text-foreground/70 leading-snug sm:leading-relaxed break-words hyphens-auto" lang="ru">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
