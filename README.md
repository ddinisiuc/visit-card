# Portfolio Website - Daniil Dinisiuc

Modern portfolio website for a Technical Partner & Product Builder, built with Next.js 16, TypeScript, and Tailwind CSS.

**Live**: [ddinisiuc.com](https://ddinisiuc.com)

## Features

- **Bilingual Support**: English and Russian (ready for Moldovan)
- **SEO Optimized**: Meta descriptions, Schema.org markup, Open Graph tags
- **Lead Magnet**: Interactive Technical Discovery Checklist with Telegram notifications
- **Testimonials Section**: Easy to toggle on/off
- **Responsive Design**: Mobile-first with glassmorphism aesthetics
- **Featured Projects**: Showcase for Invitro and Phundhub case studies
- **Performance**: Built with Next.js 16 (Turbopack) for optimal speed

## Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **i18n**: next-intl
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/flaming-flow/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Copy environment variables
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values (see Configuration section)

5. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Environment Variables

Create `.env.local` file in the root directory:

```env
# Testimonials Section
NEXT_PUBLIC_SHOW_TESTIMONIALS=true

# Telegram Bot (Optional - for lead magnet notifications)
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

### Setting up Telegram Bot (Optional)

To receive email notifications when someone downloads the lead magnet:

1. **Create Bot**:
   - Message [@BotFather](https://t.me/BotFather) in Telegram
   - Send command: `/newbot`
   - Follow instructions and save the token

2. **Get Chat ID**:
   - Message your new bot (any text)
   - Open in browser: `https://api.telegram.org/bot{YOUR_TOKEN}/getUpdates`
   - Find `"chat":{"id":123456789}` and copy the ID

3. **Add to `.env.local`**:
```env
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

## Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server

# Linting & Type Checking
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Localized routes (en, ru)
│   │   │   ├── layout.tsx      # Root layout with meta tags
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── projects/       # Projects pages
│   │   │   └── lead-magnet/    # Lead magnet page
│   │   └── api/
│   │       └── lead-magnet/    # Telegram integration API
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── PersonSchema.tsx    # Schema.org markup
│   │   └── LeadMagnet/
│   │       ├── EmailCaptureForm.tsx
│   │       └── InteractiveChecklist.tsx
│   ├── data/
│   │   ├── projects.ts         # Project data
│   │   ├── testimonials.ts     # Testimonials data
│   │   └── socials.ts          # Social links
│   ├── i18n/
│   │   └── routing.ts          # i18n configuration
│   └── messages/
│       ├── en.json             # English translations
│       └── ru.json             # Russian translations
├── public/
│   └── images/                 # Project images
├── .env.local                  # Environment variables (create from .env.example)
└── tailwind.config.ts          # Tailwind configuration
```

## Adding a New Language (e.g., Moldovan)

1. **Create translation file**: `/messages/md.json` (copy from `en.json` or `ru.json`)

2. **Translate all content**: Update all strings in the new file

3. **Update i18n config**: Add `'md'` to locales in `/src/i18n/routing.ts`

4. **Build**: Run `npm run build` to generate static pages for the new locale

All pages will automatically be generated for the new language!

## Features Breakdown

### SEO & Meta Tags

- **Dynamic meta descriptions** from translation files
- **Schema.org Person markup** for better search presence
- **Open Graph tags** for social media sharing
- **Twitter Cards** support
- **Canonical URLs** with language alternates

### Lead Magnet System

- **Interactive checklist** with 40+ items across 5 sections
- **Progress tracking** with visual feedback
- **Email capture form** with validation
- **Telegram notifications** (optional) for new leads
- **Share functionality** using Web Share API

### Testimonials

- **5 placeholder testimonials** (replace with real ones)
- **Glassmorphism design** matching site aesthetic
- **Easy to toggle** via `NEXT_PUBLIC_SHOW_TESTIMONIALS` env variable
- **Bilingual** support

## Customization

### Updating Domain

Domain is set to `ddinisiuc.com` in:
- `/src/app/[locale]/layout.tsx` - metadataBase and OG url
- `/src/app/[locale]/lead-magnet/page.tsx` - OG url
- `/src/components/PersonSchema.tsx` - Schema.org url

### Changing Featured Projects

Edit `/src/data/projects.ts`:
```typescript
{
  // ... project data
  featured: true,  // Set to true to show on homepage
}
```

### Adding/Removing Sections

Edit `/src/app/[locale]/page.tsx`:
```typescript
<Hero />
<Fit />
<About />
<ProjectsGrid />
<Testimonials />  {/* Can remove if not needed */}
<Contact />
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in `.next/` directory. Serve it with:
```bash
npm run start
```

## TODO

- [ ] Create OG images (`/public/og-image.jpg`, `/public/og-image-lead-magnet.jpg`)
- [ ] Replace placeholder testimonials with real ones
- [ ] Add Google Analytics / Yandex Metrica
- [ ] Add favicon
- [ ] Create Moldovan language file (`/messages/md.json`)
- [ ] Implement PDF download for checklist (optional)

## License

Private project. All rights reserved.

## Contact

- **Email**: ddinisiuc.web@gmail.com
- **Telegram**: [@flaming_flow](https://t.me/flaming_flow)
- **GitHub**: [@flaming-flow](https://github.com/flaming-flow)
- **LinkedIn**: [dinisiuc-daniil](https://www.linkedin.com/in/dinisiuc-daniil)
