import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages() as any;
  const seo = messages.seo?.home || {};

  const title = seo.title || "Daniil | Technical Partner & Product Builder";
  const description = seo.description || "Technical partner for early-stage founders";
  const keywords = seo.keywords ? seo.keywords.split(', ') : [];

  return {
    metadataBase: new URL('https://ddinisiuc.com'),
    title,
    description,
    keywords,
    authors: [{ name: "Daniil Dinisiuc" }],

    openGraph: {
      title,
      description,
      type: "website",
      url: `https://ddinisiuc.com/${locale}`,
      siteName: title,
      locale: locale,
      images: [{
        url: `/og?locale=${locale}&type=default`,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og?locale=${locale}&type=default`],
    },

    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ru': '/ru',
        'ro': '/md', // Moldovan uses Romanian locale code
      },
    },

    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-navy-950 text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-navy-950 via-navy-900/50 to-navy-950 pointer-events-none" />

          {/* Main content */}
          <div className="relative z-10">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
