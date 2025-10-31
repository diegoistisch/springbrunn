import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Springbrunn Fitness Grafenwörth - Fitnessstudio in 3484",
  description: "Fitnessstudio in Grafenwörth ✓ Moderne Ausstattung ✓ Flexible Tarife ab 54,90€ ✓ Täglich 05:00-23:00 geöffnet ✓ Probetraining kostenlos ✓ Jetzt starten!",
  keywords: ["Fitnessstudio Grafenwörth", "Gym Grafenwörth", "Fitness 3484", "Springbrunn Fitness", "Training Grafenwörth", "Krafttraining", "Cardio"],
  authors: [{ name: "SGH Fitness GmbH" }],
  creator: "SGH Fitness GmbH",
  publisher: "SGH Fitness GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://springbrunn.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Springbrunn Fitness - Dein Fitnessstudio in Grafenwörth",
    description: "Mehr als ein Gym - eine Community, die dich antreibt. Moderne Ausstattung, individuelle Trainingspläne und flexible Mitgliedschaften.",
    url: 'https://springbrunn.netlify.app',
    siteName: 'Springbrunn Fitness',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Springbrunn Fitness Grafenwörth',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Springbrunn Fitness Grafenwörth',
    description: 'Dein Fitnessstudio in Grafenwörth - Täglich 05:00-23:00 Uhr geöffnet',
    images: ['/images/hero.jpg'],
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
  icons: {
    icon: [
      { url: "/brand/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon/favicon.ico" }
    ],
    apple: "/brand/favicon/apple-touch-icon.png",
  },
  manifest: "/brand/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://springbrunn.netlify.app/#organization",
    "name": "Springbrunn Fitness",
    "legalName": "SGH Fitness GmbH",
    "description": "Fitnessstudio in Grafenwörth mit moderner Ausstattung, individuellen Trainingsplänen und flexiblen Mitgliedschaften.",
    "url": "https://springbrunn.netlify.app",
    "logo": "https://springbrunn.netlify.app/brand/logo_small.svg",
    "image": "https://springbrunn.netlify.app/images/hero.jpg",
    "telephone": "+43-676-7466277",
    "email": "kontakt@springbrunn-fitness.at",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hofgarten 1",
      "addressLocality": "Grafenwörth",
      "postalCode": "3484",
      "addressRegion": "Niederösterreich",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.3883",
      "longitude": "15.7497"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "05:00",
        "closes": "23:00"
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": "Cash, Bank Transfer, SEPA Direct Debit",
    "currenciesAccepted": "EUR",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "48.3883",
        "longitude": "15.7497"
      },
      "geoRadius": "50000"
    },
    "sameAs": [
      "https://springbrunn.netlify.app"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Tageskarte",
        "price": "15.00",
        "priceCurrency": "EUR",
        "description": "Einmaliger Zugang zum Fitnessstudio für einen Tag"
      },
      {
        "@type": "Offer",
        "name": "Jahresvertrag",
        "price": "54.90",
        "priceCurrency": "EUR",
        "description": "Monatlicher Beitrag für Jahresvertrag mit 12 Monaten Laufzeit"
      },
      {
        "@type": "Offer",
        "name": "Monatskarte",
        "price": "85.00",
        "priceCurrency": "EUR",
        "description": "Flexible Monatskarte ohne Vertragsbindung"
      }
    ]
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
