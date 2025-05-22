// import { Geist, Geist_Mono } from 'next/font/google';

// export const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// export const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import localFont from 'next/font/local'
import { Jersey_25 } from 'next/font/google';

export const jersey25 = Jersey_25({
  subsets: ['latin'],
  weight: '400',
});

export const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})