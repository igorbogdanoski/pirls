const { chromium } = require('playwright');
const path = require('path');

const TARGET_URL = 'https://pirls.vercel.app/for-pupil';
const SCREENSHOT_PATH = path.join(process.cwd(), 'for-pupil.png');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log(`Navigating to ${TARGET_URL}...`);
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
    
    // Check if there are story links or buttons
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a, button')).map(el => ({
        text: el.innerText.trim(),
        href: el.href || null
      })).filter(l => l.text.length > 5);
    });
    
    console.log('Detected items:');
    links.forEach(l => console.log(`- ${l.text} (${l.href || 'button'})`));
    
    await page.screenshot({ path: SCREENSHOT_PATH, fullPage: true });
    console.log(`Screenshot saved to ${SCREENSHOT_PATH}`);

  } catch (error) {
    console.error('Error during execution:', error);
  } finally {
    await browser.close();
  }
})();
