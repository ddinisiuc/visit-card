'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: string;
  content: React.ReactNode;
}

interface TabsContainerProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function TabsContainer({ tabs, defaultTab }: TabsContainerProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="space-y-6">
      {/* Tabs Navigation */}
      <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0" role="tablist">
        {tabs.map((tab) => {
          const IconComponent = Icons[tab.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              aria-label={tab.label}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-4 py-3 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300
                flex items-center gap-2 justify-center min-h-[44px] flex-shrink-0
                ${isActive
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-lg shadow-gold-400/20'
                  : 'glass border border-gold-400/20 text-foreground/70 hover:border-gold-400/40 hover:text-foreground'
                }
              `}
            >
              {IconComponent && <IconComponent className="w-5 h-5 flex-shrink-0" />}
              <span className="hidden sm:inline text-base whitespace-nowrap">{tab.label}</span>

              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTabData && (
          <motion.div
            key={activeTab}
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTabData.content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
