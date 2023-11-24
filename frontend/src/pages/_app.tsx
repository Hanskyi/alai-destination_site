import React from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import Toolbar from '@/UI/Toolbar/Toolbar';
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import Footer from '@/UI/Footer/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import '../styles/globals.scss';


export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const router = useRouter();

  return (
    <Provider store={store}>
      <NextIntlClientProvider
        locale={router.locale}
        timeZone="Europe/Vienna"
        messages={...props.pageProps.messages}
      >
        <LanguageSwitcher />
        <Toolbar />
        <Component {...props.pageProps} />
        <Whatsapp />
        <Footer />
      </NextIntlClientProvider>
    </Provider>
  );
}
