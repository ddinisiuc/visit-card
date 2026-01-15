'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/#about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/#contact', label: 'contact' },
];

export default function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const currentLocale = (params.locale as string) || 'en';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
    setIsLangMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong py-4 border-b border-white/10' : 'py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center glow-gold-sm group-hover:scale-110 transition-transform duration-300">
            <span className="text-navy-950 font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-semibold text-foreground hidden sm:block">
            Daniil<span className="text-gold-400">.</span>dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-foreground/80 hover:text-gold-400 transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
            >
              {t(link.label)}
            </Link>
          ))}
        </div>

        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 px-4 py-3 rounded-full border border-gold-400/20 hover:border-gold-400/40 transition-colors duration-300 min-h-[44px]"
            >
              <Globe className="w-4 h-4 text-gold-400" />
              <span className="text-sm uppercase">{currentLocale}</span>
            </button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 glass-strong rounded-xl overflow-hidden min-w-[120px]"
                >
                  <button
                    onClick={() => switchLocale('en')}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-gold-400/10 transition-colors ${
                      currentLocale === 'en' ? 'text-gold-400' : 'text-foreground/80'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLocale('ru')}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-gold-400/10 transition-colors ${
                      currentLocale === 'ru' ? 'text-gold-400' : 'text-foreground/80'
                    }`}
                  >
                    Русский
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-gold-400/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gold-400" />
            ) : (
              <Menu className="w-6 h-6 text-gold-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-4 mx-4 sm:mx-6 rounded-2xl overflow-hidden"
          >
            <div className="py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-foreground/80 hover:text-gold-400 hover:bg-gold-400/5 transition-colors uppercase tracking-wider text-sm font-medium"
                  >
                    {t(link.label)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
