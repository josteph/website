import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'contentlayer/generated': './.contentlayer/generated',
    },
  },
  test: {
    coverage: {
      enabled: Boolean(process.env.CI),
      exclude: [
        // Test files
        '**/__buggy_tests__/**',
        '**/__tests__/**',

        // Storybook
        '**/*.stories.{tsx,jsx}',
      ],
      provider: 'istanbul',
      reporter: ['json-summary', 'lcov', process.env.CI ? 'cobertura' : 'text'],
    },
    css: false,
    environment: 'jsdom',
    globals: true,
    include: ['**/__tests__/**/(*.)(spec|test).(t|j)s?(x)'],
    outputFile: {
      junit: 'junit_report.xml',
    },
    reporters: ['default', 'junit'],
    setupFiles: ['./src/tests/setup_test.ts'],
    silent: Boolean(process.env.CI),
    watch: !process.env.CI,
  },
});
