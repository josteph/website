import { registerServiceWorker } from '@worker';

try {
  (async () => {
    require('./polyfills');

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
