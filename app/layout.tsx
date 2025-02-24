"use client";

import './globals.css';
import type { Metadata } from 'next';
import { Inter as InterFont } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import { CartProvider } from '@/context/CartProvider';

const inter = InterFont({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CartProvider>
          <Header />
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}