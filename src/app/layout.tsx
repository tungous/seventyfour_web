import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seventyfour",
  description: "Home of creatives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div className="z-999 fixed bottom-2 right-2 lg:text-[10px] text-[8px] mix-blend-difference text-white font-bold tracking-tighter">
          © 2025 Seventyfour. All Rights Reserved.
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
