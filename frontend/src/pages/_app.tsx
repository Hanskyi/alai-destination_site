import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import type { AppProps } from 'next/app';
import { Metadata } from 'next';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
