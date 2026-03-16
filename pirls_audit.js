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

  // 1. Count stories on home page
  const stories = await page.evaluate(() => {
    // Look for links that point to a story
    const links = Array.from(document.querySelectorAll('a[href*="/story/"]'));
    return links.map(a => ({
      title: a.innerText.trim().replace(/\n/g, ' '),
      href: a.href
    })).filter(s => s.title.length > 0 && s.href.includes('/story/'));
  });

  console.log(`Found ${stories.length} stories on home page.`);

  // 2. Take screenshot
  await page.screenshot({ path: SCREENSHOT_PATH, fullPage: true });
  console.log(`Screenshot saved to ${SCREENSHOT_PATH}`);

  const results = [];

  // 3 & 4. Check each story
  for (const story of stories) {
    console.log(`Checking story: ${story.title}...`);
    const storyPage = await context.newPage();
    await storyPage.goto(story.href, { waitUntil: 'networkidle' });

    const audit = await storyPage.evaluate(() => {
      // Look for paragraphs or text content
      const paragraphs = Array.from(document.querySelectorAll('p')).filter(p => p.innerText.trim().length > 20);
      
      // Look for fieldsets or question markers
      const fieldsets = document.querySelectorAll('fieldset');
      let questionCount = fieldsets.length;
      
      // Fallback: look for elements containing "Прашање" or numbered markers
      if (questionCount === 0) {
        const questions = Array.from(document.querySelectorAll('div, section')).filter(el => {
          return /Прашање\s+\d+/.test(el.innerText) || /^\d+\./.test(el.innerText.trim());
        });
        questionCount = questions.length;
      }

      return {
        hasFullText: paragraphs.length > 0,
        paragraphCount: paragraphs.length,
        questionCount: questionCount
      };
    });

    results.push({
      title: story.title,
      ...audit
    });

    await storyPage.close();
  }

  console.log('\n--- AUDIT REPORT ---');
  results.forEach(r => {
    console.log(`Story: ${r.title}`);
    console.log(`  Full Text: ${r.hasFullText ? 'YES' : 'NO'} (${r.paragraphCount} paragraphs)`);
    console.log(`  Questions: ${r.questionCount}`);
  });

  const all15 = results.every(r => r.questionCount === 15);
  console.log(`\nAll 8 stories have 15 questions: ${all15 ? 'YES' : 'NO'}`);

  await browser.close();
})();
