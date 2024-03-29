import { useLayoutEffect, ReactNode } from 'react';

const Theme = ({ children }: { children: ReactNode }) => {
  useLayoutEffect(() => {
    let mql: MediaQueryList;

    const handler = (event: MediaQueryListEvent | MediaQueryList) => {
      document.documentElement.setAttribute('data-color-theme', event.matches ? 'dark' : 'light');
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

export default Theme;
