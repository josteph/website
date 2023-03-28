import { useEffect } from 'react';

import Layout from '@/components/Layout';
import Header from '@/components/Header';
import { initSplitbee } from '@/lib/splitbee';
import initLogger from '@/lib/logger';

import '@code-hike/mdx/dist/index.css';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initLogger();
      initSplitbee();
    }
  }, []);

  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
