import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import LogosProvider from '@/context/LogosContext';

import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FitLog',
  description: 'Track your workouts and build your daily plan.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="night"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#0d0f11] text-white">
        <LogosProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2500,
              style: {
                background: '#181b1e',
                color: '#ffffff',
                border: '1px solid #292c32',
              },
              success: {
                iconTheme: {
                  primary: '#b8ff00',
                  secondary: '#000000',
                },
              },
            }}
          />
        </LogosProvider>
      </body>
    </html>
  );
}