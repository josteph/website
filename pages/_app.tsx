/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Header from '@components/Header';
import { func, object } from 'prop-types';
import '@styles/globals.scss';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: func.isRequired,
  pageProps: object.isRequired,
};

export default App;
