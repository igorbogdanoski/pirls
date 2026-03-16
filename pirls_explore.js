const { chromium } = require('playwright');
const path = require('path');

const TARGET_URL = 'https://pirls.vercel.app';
const SCREENSHOT_PATH = path.join(process.cwd(), 'home-page.png');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`Navigating to ${TARGET_URL}...`);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle' });

  // Take screenshot
  await page.screenshot({ path: SCREENSHOT_PATH, fullPage: true });
  console.log(`Screenshot saved to ${SCREENSHOT_PATH}`);

  // Count stories (any link that looks like a story)
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a')).map(a => ({
      text: a.innerText.trim(),
      href: a.href
    }));
  });

  console.log('Links found:');
  links.forEach(l => {
    if (l.text.length > 0) {
      console.log(`- ${l.text} (${l.href})`);
    }
  });

  await browser.close();
})();
