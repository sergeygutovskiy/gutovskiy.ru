import type { AppProps } from 'next/app';

import '@styles/reset.scss';
import '@styles/root.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
