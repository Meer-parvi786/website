import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "SkardoNest — Skardu Tour Packages by Air & Road | Gilgit-Baltistan",
  description:
    "Book Skardu tour packages from Rs. 75,000. Skardu by air & road trips. Deosai, Kachura Lake, Shigar Fort & more. 8+ years experience, 500+ happy guests. Flight guarantee included!",
  keywords: [
    "Skardu tour packages",
    "Skardu by air",
    "Gilgit Baltistan tours",
    "Deosai National Park",
    "Kachura Lake Skardu",
    "Shigar Fort tour",
    "KKH road trip",
    "Skardu honeymoon",
    "Skardu tour company",
    "Skardu tour packages price",
    "Skardu flights",
    "Pakistan tourism",
    "Baltistan tours",
  ],
  authors: [{ name: "SkardoNest" }],
  creator: "SkardoNest",
  publisher: "SkardoNest",
  openGraph: {
    title: "SkardoNest — Discover Skardu With Locals",
    description:
      "Premium Skardu tour packages by air & road. Deosai, Kachura, Shigar & more. 8+ years experience. Book now!",
    url: "https://skardonest.com",
    siteName: "SkardoNest",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "/hero-skardu.webp",
        width: 1344,
        height: 768,
        alt: "Skardu Valley — Karakoram Mountains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkardoNest — Skardu Tour Packages",
    description:
      "Book Skardu tours from Rs. 75,000. By air & road. 8+ years experience, 500+ happy guests.",
    images: ["/hero-skardu.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
  },
};

// JSON-LD Schema Markup for Tours
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "SkardoNest",
  description:
    "Skardu-based tour company offering premium Skardu tour packages by air and road.",
  url: "https://skardonest.com",
  telephone: "+92 347 8875789",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Bazaar, Skardu",
    addressLocality: "Skardu",
    addressRegion: "Gilgit-Baltistan",
    addressCountry: "PK",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Gilgit-Baltistan, Pakistan",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-900">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
