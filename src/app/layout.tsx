import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { Root } from '@/components/root/Root';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: 'latentspace.world',
  description: '개발자 김준석.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Root className={notoSansKR.className}>{children}</Root>;
}
