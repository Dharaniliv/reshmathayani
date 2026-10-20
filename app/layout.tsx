import type { Metadata } from "next";
import {
  Instrument_Serif,
  Fraunces,
  Plus_Jakarta_Sans,
  Caveat,
} from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://reshmathayani.vercel.app"),

  title: "Resh Thayani | Elevating Your Natural Beauty",

  description:
    "Discover bridal makeup artistry by Resh Thayani in Hyderabad. Thoughtfully crafted beauty for your most meaningful moments.",

  openGraph: {
    title: "Resh Thayani | Elevating Your Natural Beauty",
    description:
      "Discover bridal makeup artistry by Resh Thayani in Hyderabad. Thoughtfully crafted beauty for your most meaningful moments.",
    url: "/",
    siteName: "Resh Thayani",
    images: [
      {
        url: "/images/resh-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Resh Thayani — Bridal Makeup Artistry",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Resh Thayani | Elevating Your Natural Beauty",
    description:
      "Discover bridal makeup artistry by Resh Thayani in Hyderabad.",
    images: ["/images/resh-hero.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${instrumentSerif.variable} ${fraunces.variable} ${plusJakartaSans.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}