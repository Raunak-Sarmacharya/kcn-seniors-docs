import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KCN Seniors Documentation Portal',
  description: 'Comprehensive documentation portal for KCN Seniors WordPress website management',
  keywords: ['WordPress', 'documentation', 'KCN Seniors', 'website management'],
  authors: [{ name: 'KCN Seniors' }],
  robots: 'index, follow', // Public documentation portal
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
