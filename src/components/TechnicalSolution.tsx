'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechnicalDiagram } from '@/data/projects';
import { ChevronRight, Layers, Network, Users } from 'lucide-react';
import Image from 'next/image';
import { DiagramCanvas } from './DiagramCanvas';

interface TechnicalSolutionProps {
  title: string;
  description: string;
  diagrams: TechnicalDiagram[];
}

const iconMap: Record<string, any> = {
  architecture: Layers,
  deduplication: Network,
  'user-journey': Users,
};

export function TechnicalSolution({ title, description, diagrams }: TechnicalSolutionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!diagrams || diagrams.length === 0) {
    return null;
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-gold-400/20">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-foreground/80 uppercase tracking-wide">Technical Deep Dive</span>
          </div>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl break-words hyphens-auto leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed break-words hyphens-auto">
            {description}
          </p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-12"
          role="tablist"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-2 rounded-xl glass-strong">
            {diagrams.map((diagram, index) => {
              const Icon = iconMap[diagram.id] || ChevronRight;
              const isActive = activeTab === index;

              return (
                <motion.button
                  key={diagram.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`diagram-panel-${diagram.id}`}
                  aria-label={diagram.title}
                  onClick={() => {
                    setActiveTab(index);
                    setImageLoaded(false);
                  }}
                  className={`
                    relative flex-1 px-4 sm:px-6 py-4 rounded-lg text-sm font-medium
                    transition-all duration-300 group min-h-[44px]
                    ${isActive ? 'text-foreground' : 'text-muted hover:text-foreground/80'}
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg gradient-gold glow-gold-sm"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative flex items-center justify-center gap-2">
                    <Icon className={`w-5 h-5 sm:w-4 sm:h-4 transition-colors ${isActive ? 'text-navy-950' : 'text-gold-400'}`} />
                    <span className={`hidden sm:inline ${isActive ? 'text-navy-950 font-semibold' : ''}`}>
                      {diagram.title}
                    </span>
                  </div>

                  {/* Hover effect for inactive tabs */}
                  {!isActive && (
                    <div className="absolute inset-0 rounded-lg border border-gold-400/0 group-hover:border-gold-400/30 transition-colors duration-300" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Diagram Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`diagram-panel-${diagrams[activeTab].id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl glass-strong p-4 md:p-8 glow-gold-sm"
          >
            {/* Interactive Canvas Diagram */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full"
            >
              {diagrams[activeTab].diagramData ? (
                <DiagramCanvas
                  data={diagrams[activeTab].diagramData!}
                  alt={diagrams[activeTab].title}
                />
              ) : diagrams[activeTab].image ? (
                <Image
                  src={diagrams[activeTab].image}
                  alt={diagrams[activeTab].title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              ) : null}
            </motion.div>

            {/* Caption with elegant styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mt-6"
            >
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 break-words hyphens-auto">
                {diagrams[activeTab].caption}
              </p>

              {/* Decorative gradient line */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-2 mt-8"
        >
          {diagrams.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setImageLoaded(false);
              }}
              className="group"
              aria-label={`Go to diagram ${index + 1}`}
            >
              <div className={`
                h-1.5 rounded-full transition-all duration-300
                ${activeTab === index ? 'w-12 bg-gold-400' : 'w-1.5 bg-muted/30 group-hover:bg-gold-400/50'}
              `} />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
