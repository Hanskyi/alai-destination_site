import React, { useCallback, useEffect, useState } from 'react';
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
import { SessionProvider } from 'next-auth/react';
import { IHeaderFooterInfo } from '@/type';
import axiosApi from '@/axiosApi';

export default function App({ Component, ...rest }: AppProps) {
  const [headerFooter, setHeaderFooter] = useState<IHeaderFooterInfo | null>(null);
  const { store, props } = wrapper.useWrappedStore(rest);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axiosApi<IHeaderFooterInfo>(`info`);
      setHeaderFooter(data);
    } catch (e) {
      alert('Something went wrong. Please refresh the page!');
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <Provider store={store}>
      <SessionProvider session={...props.pageProps.session}>
        <NextIntlClientProvider
          locale={router.locale}
          timeZone="Europe/Vienna"
          messages={...props.pageProps.messages}
        >
          <LanguageSwitcher />
          <Toolbar hfData={headerFooter} />
          <Component {...props.pageProps} />
          <Whatsapp />
          <Footer hfData={headerFooter} />
        </NextIntlClientProvider>
      </SessionProvider>
    </Provider>
  );
}
