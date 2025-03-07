import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { Root } from '@/components/root/Root';

export const metadata: Metadata = {
  title: 'latentspace.world',
  description: '개발자 김준석.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Root>{children}</Root>;
}
