import type { Metadata } from 'next';
import { Kalam, Patrick_Hand } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        <script
          id="meta-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1325806225502254');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${kalam.variable} ${patrickHand.variable} antialiased min-h-screen flex flex-col`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1325806225502254&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
