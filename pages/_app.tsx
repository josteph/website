/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';

import Layout from '@components/Layout';
import Header from '@components/Header';
import { initSplitbee } from '@lib/splitbee';
import initLogger from '@lib/logger';

import '@styles/globals.scss';

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
