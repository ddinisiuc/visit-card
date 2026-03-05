import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Generate simple SVG OG images
const generateOGImage = (title, subtitle, label = '') => {
  const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#020617;stop-opacity:1" />
      <stop offset="30%" style="stop-color:#0a1628;stop-opacity:1" />
      <stop offset="60%" style="stop-color:#0f2847;stop-opacity:1" />
      <stop offset="90%" style="stop-color:#0a1628;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#020617;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#fcd34d;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#f59e0b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="glow1">
      <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:0.12" />
      <stop offset="60%" style="stop-color:#f59e0b;stop-opacity:0" />
    </radialGradient>
    <radialGradient id="glow2">
      <stop offset="0%" style="stop-color:#1e4976;stop-opacity:0.3" />
      <stop offset="60%" style="stop-color:#1e4976;stop-opacity:0" />
    </radialGradient>
    <filter id="shadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="20"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.35"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Glow effects -->
  <circle cx="200" cy="100" r="250" fill="url(#glow1)"/>
  <circle cx="1000" cy="530" r="225" fill="url(#glow2)"/>

  <!-- Glass card -->
  <rect x="110" y="140" width="980" height="350" rx="28" fill="rgba(15, 40, 71, 0.3)"
        stroke="rgba(245, 158, 11, 0.15)" stroke-width="1" filter="url(#shadow)"/>

  ${label ? `
  <!-- Badge -->
  <rect x="485" y="170" width="230" height="44" rx="22" fill="rgba(245, 158, 11, 0.12)"
        stroke="rgba(245, 158, 11, 0.35)" stroke-width="2"/>
  <text x="600" y="200" font-family="system-ui, -apple-system, sans-serif"
        font-size="20" font-weight="700" fill="url(#gold)" text-anchor="middle" letter-spacing="3">${label.toUpperCase()}</text>
  ` : ''}

  <!-- Title -->
  <text x="600" y="${label ? '280' : '310'}" font-family="system-ui, -apple-system, sans-serif"
        font-size="${title.length > 50 ? '54' : '68'}" font-weight="700" fill="url(#gold)"
        text-anchor="middle" letter-spacing="-1">
    ${title}
  </text>

  <!-- Subtitle -->
  <text x="600" y="${label ? '330' : '370'}" font-family="system-ui, -apple-system, sans-serif"
        font-size="32" font-weight="500" fill="#94a3b8" text-anchor="middle" letter-spacing="-0.5">
    ${subtitle}
  </text>

  <!-- Accent lines -->
  <rect x="530" y="${label ? '410' : '440'}" width="70" height="5" rx="3" fill="url(#gold)" opacity="1"/>
  <rect x="610" y="${label ? '410' : '440'}" width="45" height="5" rx="3" fill="#f59e0b" opacity="0.6"/>
  <rect x="665" y="${label ? '410' : '440'}" width="25" height="5" rx="3" fill="#f59e0b" opacity="0.3"/>

  <!-- Logo -->
  <rect x="524" y="545" width="48" height="48" rx="12" fill="url(#gold)"/>
  <text x="548" y="577" font-family="system-ui, -apple-system, sans-serif"
        font-size="28" font-weight="800" fill="#020617" letter-spacing="-1">D</text>

  <!-- Domain -->
  <text x="590" y="576" font-family="system-ui, -apple-system, sans-serif"
        font-size="28" font-weight="600" fill="#f8fafc" letter-spacing="-0.5">ddinisiuc.com</text>
</svg>`;

  return svg.trim();
};

const images = [
  {
    filename: 'og-en-default.svg',
    title: 'Daniil | Technical Partner & Product Builder',
    subtitle: 'For Early-Stage Founders',
    label: ''
  },
  {
    filename: 'og-ru-default.svg',
    title: 'Даниил | Технический партнёр и создатель продуктов',
    subtitle: 'Для основателей на ранней стадии',
    label: ''
  },
  {
    filename: 'og-md-default.svg',
    title: 'Daniil | Partener tehnic și constructor de produse',
    subtitle: 'Pentru fondatori în fază inițială',
    label: ''
  },
  {
    filename: 'og-en-lead-magnet.svg',
    title: 'Technical Discovery Checklist',
    subtitle: 'For Early-Stage Founders',
    label: 'Free Resource'
  },
  {
    filename: 'og-ru-lead-magnet.svg',
    title: 'Технический чек-лист',
    subtitle: 'Для основателей на ранней стадии',
    label: 'Бесплатный ресурс'
  },
  {
    filename: 'og-md-lead-magnet.svg',
    title: 'Checklist tehnic de descoperire',
    subtitle: 'Pentru fondatori în fază inițială',
    label: 'Resursă gratuită'
  }
];

// Create og directory
const ogDir = join(process.cwd(), 'public', 'og');
mkdirSync(ogDir, { recursive: true });

// Generate all images
images.forEach(({ filename, title, subtitle, label }) => {
  const svg = generateOGImage(title, subtitle, label);
  const filepath = join(ogDir, filename);
  writeFileSync(filepath, svg);
  console.log(`✓ Generated ${filename}`);
});

console.log('\n✓ All OG images generated successfully!');
