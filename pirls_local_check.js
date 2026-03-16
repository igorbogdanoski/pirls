const { chromium } = require('playwright');
const path = require('path');

const TARGET_URL = 'http://localhost:5173/';
const SCREENSHOT_PATH = path.join(process.cwd(), 'local-home.png');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log(`Navigating to ${TARGET_URL}...`);
    await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
    
    // Wait for the main container
    await page.waitForSelector('h1', { timeout: 10000 });
    
    const h1 = await page.innerText('h1');
    console.log(`H1 found: ${h1}`);
    
    // Count story buttons
    const buttons = await page.$$('button');
    console.log(`Found ${buttons.length} buttons.`);
    
    const storyTitles = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      return btns.map(b => b.innerText.trim()).filter(t => t.length > 5 && !t.includes('Назад'));
    });
    
    console.log('Story titles detected:');
    storyTitles.forEach(t => console.log(`- ${t}`));
    
    await page.screenshot({ path: SCREENSHOT_PATH, fullPage: true });
    console.log(`Screenshot saved to ${SCREENSHOT_PATH}`);

  } catch (error) {
    console.error('Error during execution:', error);
  } finally {
    await browser.close();
  }
})();
