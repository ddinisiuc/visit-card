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

export function BusinessMetrics({ title, metrics }: BusinessMetricsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const colors = typeColors[metric.type];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass rounded-2xl p-6 border border-gold-400/10 hover:border-gold-400/20 transition-all duration-300 bg-gradient-to-br ${colors.background}`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm text-muted font-medium">
                  {metric.label}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border ${colors.badge} font-medium`}>
                  {typeLabels[metric.type]}
                </span>
              </div>

              <div className={`text-4xl font-bold mb-3 ${colors.accent}`}>
                {metric.value}
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
