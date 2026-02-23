'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Feedback {
  role: string;
  quote: string;
  context: string;
}

interface TeamFeedbackProps {
  title: string;
  feedback: Feedback[];
}

export function TeamFeedback({ title, feedback }: TeamFeedbackProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedback.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 border border-gold-400/10 hover:border-gold-400/20 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-400/20">
                <Quote className="w-5 h-5 text-gold-400" />
              </div>
              <div className="flex-1">
                <div className="text-xs px-2 py-1 rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20 inline-block font-medium">
                  {item.role}
                </div>
              </div>
            </div>

            <blockquote className="text-foreground/80 leading-relaxed mb-4 flex-1 italic">
              "{item.quote}"
            </blockquote>

            <div className="text-xs text-muted italic pt-3 border-t border-gold-400/10">
              {item.context}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
