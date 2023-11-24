import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';
import Toolbar from '@/UI/Toolbar/Toolbar';
import Whatsapp from '@/components/Whatsapp/Whatsapp';
import Footer from '@/UI/Footer/Footer';
import '../styles/globals.scss';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Toolbar />
      <Component {...props.pageProps} />
      <Whatsapp />
      <Footer />
    </Provider>
  );
}
