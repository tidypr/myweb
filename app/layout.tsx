import './globals.css';
import { jersey25 } from '@/assets/fonts';

import type { Metadata } from 'next';

import Providers from './providers';
import Header from '@/components/header/Header';
import Main from '@/components/common/Main';

// shadcn/ui
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: `tidypr's website`,
  description: 'devblog & portfolio',
  keywords: ['dev', 'blog', 'portfolio'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='scroll-smooth' suppressHydrationWarning>
      <body className={`${jersey25.className} antialiased`}>
        <Providers>
          <Header />
          <Main>{children}</Main>
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
