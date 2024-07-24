import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Fotter from '@/components/common/Fotter';
import Header from '@/components/common/Header';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SciServ',
  description: 'SciServのブログサイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <body className={inter.className}>
        <div data-overlay-container className='flex flex-col min-h-screen'>
          <Header />
          <main className='my-auto'>{children}</main>
          <SpeedInsights />
          <GoogleAnalytics gaId={process.env.GA_ID ?? ''} />
          <Fotter />
        </div>
      </body>
    </html>
  );
}
