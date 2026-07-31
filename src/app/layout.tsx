import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3015"),
  title: "Studio Nova — Architecture & Interior Design",
  description:
    "Studio Nova designs private residences, hospitality interiors and workplaces defined by light, material honesty and quiet luxury.",
  keywords: [
    "architecture studio",
    "interior design studio",
    "luxury interior design",
    "residential architecture",
    "hospitality design",
  ],
  openGraph: {
    title: "Studio Nova — Architecture & Interior Design",
    description:
      "Private residences, hospitality interiors and workplaces defined by light, material honesty and quiet luxury.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a08",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-ink text-bone font-body">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
