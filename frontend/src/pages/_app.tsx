import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';
import Toolbar from '@/UI/Toolbar/Toolbar';
import Footer from '@/UI/Footer/Footer';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Toolbar />
      <Component {...props.pageProps} />
      <Footer />
    </Provider>
  );
}
