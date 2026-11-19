import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  reporter: [['list'], ['junit', { outputFile: 'results/results.xml' }]],
  use: {
    baseURL: process.env.BASE_URL || "https://www.acuronix.in",
    navigationTimeout: 60000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
