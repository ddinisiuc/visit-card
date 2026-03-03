import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ru', 'md'],
  defaultLocale: 'en',
  localePrefix: 'always'
});
