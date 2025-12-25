import type { Metadata } from "next";
import { JetBrains_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chipter | The Seismic Scale for Snacks",
  description: "Where chips meet their magnitude. Bold, brutalist reviews that hit harder than your favorite crunch.",
  keywords: ["chips", "snacks", "reviews", "ratings", "snack reviews"],
  authors: [{ name: "Chipter" }],
  openGraph: {
    title: "Chipter | The Seismic Scale for Snacks",
    description: "Where chips meet their magnitude. Bold, brutalist reviews that hit harder than your favorite crunch.",
    type: "website",
    locale: "en_US",
    siteName: "Chipter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chipter | The Seismic Scale for Snacks",
    description: "Where chips meet their magnitude. Bold, brutalist reviews that hit harder than your favorite crunch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${instrumentSerif.variable} ${inter.variable}`}>
      <body className="antialiased mx-auto bg-warm-white text-almost-black">
        {children}
      </body>
    </html>
  );
}