import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const seasonMixMedium = localFont({
  src: "./fonts/SeasonMix-TRIAL-Medium.ttf",
  variable: "--font-season-mix-medium",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Bluechips",
  description: "Portfolio dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${seasonMixMedium.variable} min-h-screen bg-canvas font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
