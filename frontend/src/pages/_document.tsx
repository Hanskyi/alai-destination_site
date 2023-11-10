import { Html, Head, Main, NextScript } from 'next/document';
import { Metadata } from 'next';
import { montserrat } from '../../fontConfig';
import Header from '@/UI/Header/Header';

export const metadata: Metadata = {
  title: 'Alai Destinations',
  description: 'Generated by create next app',
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={montserrat.className}>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
