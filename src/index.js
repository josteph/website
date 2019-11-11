import { registerServiceWorker } from '@worker';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

try {
  (async () => {
    require('./polyfills');

    LogRocket.init('o2q1vh/my-portfolio-zaq7r');

    setupLogRocketReact(LogRocket);

    /**
     * Using webpackMode: "eager" will cause this dynamic import to be part of the main bundle,
     * not creating its own chunk
     */
    await import(/* webpackMode: "eager" */ './bootstrap.js');
  })();
} catch (error) {
  console.log('[Bootstrap] Error:', error.toString());
  console.log(error.stack);
} finally {
  try {
    console.log('Registering service worker');
    registerServiceWorker();
  } catch (error) {
    console.log('[Service Worker] Error:', error.toString());
    console.log(error.stack);
  }
}
