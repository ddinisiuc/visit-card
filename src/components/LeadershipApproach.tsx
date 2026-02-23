'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface LeadershipPrinciple {
  title: string;
  description: string;
  icon: string;
}

interface LeadershipApproachProps {
  title: string;
  description: string;
  principles: LeadershipPrinciple[];
}

export function LeadershipApproach({ title, description, principles }: LeadershipApproachProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
        {title}
      </h2>
      <p className="text-muted leading-relaxed text-lg mb-8">
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle, index) => {
          // Dynamically get icon component
          const IconComponent = Icons[principle.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-400/20 group-hover:border-gold-400/40 transition-colors duration-300">
                  {IconComponent && <IconComponent className="w-6 h-6 text-gold-400" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-gold-400 transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
