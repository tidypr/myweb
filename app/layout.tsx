import type { Metadata } from 'next';
import { Jersey_25 } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Main from '@/components/ui/Main';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const jersey25 = Jersey_25({
  subsets: ['latin'],
  weight: '400',
});

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
    <html lang='ko' className='scroll-smooth'>
      <body className={`${jersey25.className} antialiased`}>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
