import { useEffect } from 'react';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    let mql: MediaQueryList;

    const handler = (event: MediaQueryListEvent | MediaQueryList) => {
      document.documentElement.setAttribute('data-theme', event.matches ? 'dark' : 'light');
    };

    if (window.matchMedia) {
      mql = window.matchMedia('(prefers-color-scheme: dark)');

      handler(mql);

      mql.addEventListener('change', handler);
    }

    return () => {
      if (mql) {
        mql.removeEventListener('change', handler);
      }
    };
  }, []);

  return <>{children}</>;
};

export default Layout;
