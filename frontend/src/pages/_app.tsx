import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import Header from '@/UI/Header/Header';
import Footer from '@/UI/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
