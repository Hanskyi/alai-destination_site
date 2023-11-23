import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';
import Footer from '@/UI/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import Toolbar from '@/UI/Toolbar/Toolbar';

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
        <Toolbar />
        <Component {...props.pageProps} />
        <Footer />
      </NextIntlClientProvider>
    </Provider>
  );
}
