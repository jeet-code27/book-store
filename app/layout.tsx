import type { Metadata } from 'next';
import { Kalam, Patrick_Hand } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const kalam = Kalam({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-kalam',
});

const patrickHand = Patrick_Hand({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-patrick',
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Premium Book Store',
  description: 'Purchase premium digital books and guides.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kalam.variable} ${patrickHand.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
