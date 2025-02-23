import './globals.css';
import type { Metadata } from 'next';
import { Inter as InterFont } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';

const inter = InterFont({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Modern E-commerce',
  description: 'A modern e-commerce platform built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}