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
  title: "Daniil | Tech Partner & Product Builder",
  description: "I take ownership of the tech side, lead small teams, and help turn ideas into working products. Architecture, delivery, and execution.",
  keywords: ["tech partner", "product builder", "laravel", "vue.js", "team lead", "startup CTO"],
  authors: [{ name: "Daniil" }],
  openGraph: {
    title: "Daniil | Tech Partner & Product Builder",
    description: "I take ownership of the tech side, lead small teams, and help turn ideas into working products.",
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
