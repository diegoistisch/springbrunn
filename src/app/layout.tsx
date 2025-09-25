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
  title: "Springbrunn Fitness - Dein Gym in der Stadt",
  description: "Mehr als ein Gym - eine Community, die dich antreibt. Moderne Ausstattung, individuelle Trainingspläne und flexible Mitgliedschaften.",
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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
