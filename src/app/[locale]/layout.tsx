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

export const metadata: Metadata = {
  title: "Daniil | Full-Stack Developer",
  description: "Full-Stack Developer crafting elegant digital experiences with modern technologies. Specializing in React, Next.js, TypeScript, and scalable architecture.",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "typescript"],
  authors: [{ name: "Daniil" }],
  openGraph: {
    title: "Daniil | Full-Stack Developer",
    description: "Full-Stack Developer crafting elegant digital experiences with modern technologies.",
    type: "website",
  },
};

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
