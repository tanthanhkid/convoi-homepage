import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingProvider from "./components/LoadingProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Convoi - Chương trình Trường Sạch",
  description: "Kết nối các nguồn lực xã hội để học sinh có nhà vệ sinh sạch để sử dụng khi đến trường",
  keywords: "Convoi, Trường Sạch, nhà vệ sinh, giáo dục, CSR, BRT-3",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preload" href="/favicon.png" as="image" type="image/png" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
