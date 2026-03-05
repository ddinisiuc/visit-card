import { setRequestLocale } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import LeadMagnetContent from '@/components/LeadMagnet/LeadMagnetContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages() as any;
  const seo = messages.leadMagnet || {};

  const title = seo.title || "Technical Discovery Checklist";
  const description = seo.description || "A comprehensive checklist for early-stage founders";

  return {
    title,
    description,
    keywords: locale === 'en'
      ? 'technical checklist, startup founders, MVP development, product discovery, tech stack decisions'
      : 'технический чек-лист, стартап основатели, MVP разработка, product discovery, выбор tech stack',
    authors: [{ name: "Daniil Dinisiuc" }],

    openGraph: {
      title,
      description,
      type: "website",
      url: `https://ddinisiuc.com/${locale}/lead-magnet`,
      siteName: "Daniil | Technical Partner",
      locale: locale,
      images: [{
        url: `/og?locale=${locale}&type=lead-magnet`,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og?locale=${locale}&type=lead-magnet`],
    },

    alternates: {
      canonical: `/${locale}/lead-magnet`,
      languages: {
        'en': '/en/lead-magnet',
        'ru': '/ru/lead-magnet',
        'ro': '/md/lead-magnet', // Moldovan uses Romanian locale code
      },
    },

    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LeadMagnetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LeadMagnetContent />;
}
