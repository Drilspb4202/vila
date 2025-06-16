import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Камерный ретрит в сердце Карелии | Виллогора Ретрит",
  description: "Перезагрузка души в окружении природы. Уютный дом, баня, домашняя кухня, ароматерапия и единение с природой Карелии. Забронируйте свой ретрит уже сегодня!",
  keywords: "ретрит, Карелия, отдых на природе, баня, ароматерапия, перезагрузка, медитация, эко-туризм",
  authors: [{ name: "Виллогора Ретрит" }],
  creator: "Виллогора Ретрит",
  publisher: "Виллогора Ретрит",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://villogora-retreat.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Камерный ретрит в сердце Карелии | Виллогора Ретрит",
    description: "Перезагрузка души в окружении природы. Уютный дом, баня, домашняя кухня, ароматерапия и единение с природой Карелии.",
    url: 'https://villogora-retreat.ru',
    siteName: 'Виллогора Ретрит',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Камерный ретрит в Карелии',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Камерный ретрит в сердце Карелии | Виллогора Ретрит",
    description: "Перезагрузка души в окружении природы. Уютный дом, баня, домашняя кухня, ароматерапия и единение с природой Карелии.",
    images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
