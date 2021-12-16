/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { func, object } from 'prop-types';

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

App.propTypes = {
  Component: func.isRequired,
  pageProps: object.isRequired,
};

export default App;
