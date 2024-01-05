import { AnimatePresence } from 'framer-motion';

import { useEffect } from 'react';

import Theme from '@/components/Theme';
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
    <Theme>
      <Header />

      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </Theme>
  );
}

export default App;
