const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://pirls.vercel.app');
  await page.waitForLoadState('networkidle');
  const h1 = await page.innerText('h1').catch(() => 'NO H1 FOUND');
  console.log('H1:', h1);
  await browser.close();
})();
