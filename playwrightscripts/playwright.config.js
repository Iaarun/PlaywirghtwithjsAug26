const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  use: {
    screenshot:'on',
    browserName: 'chromium',
    headless: false,
    trace:"on",
    video:'retain-on-failure'
    
  },
});

