import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Andrea's 25th Birthday Run - Join the Celebration!",
  description: "Join Andrea's 25th birthday celebration! Together we'll run 25km - 1km each person. Share your commitment, upload your photos, and get your virtual medal!",
  icons: {
    icon: '/Andreas-Birthday-Run-Medal.svg',
    shortcut: '/Andreas-Birthday-Run-Medal.svg',
    apple: '/Andreas-Birthday-Run-Medal.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
