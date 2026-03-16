const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const TARGET_URL = 'https://pirls.vercel.app';
  const results = {
    storyCount: 0,
    stories: [],
    screenshotPath: '/tmp/home-page.png'
  };

  try {
    console.log('Navigating to homepage...');
    await page.goto(TARGET_URL);
    // Wait for the main list of stories to load
    await page.waitForSelector('a[href^="/stories/"]', { timeout: 15000 });

    // 1. Count stories on home page
    const storyLinks = await page.locator('a[href^="/stories/"]').all();
    results.storyCount = storyLinks.length;
    console.log(`Found ${results.storyCount} stories.`);

    // 2. Take screenshot
    await page.screenshot({ path: 'home-page.png', fullPage: true });
    console.log('Homepage screenshot saved to home-page.png');

    // 3. & 4. Verify stories and count questions
    for (let i = 0; i < storyLinks.length; i++) {
        // Re-locate links after each navigation to be safe
        const currentLinks = await page.locator('a[href^="/stories/"]').all();
        const link = currentLinks[i];
        const title = await link.innerText();
        const href = await link.getAttribute('href');
        const storyUrl = href.startsWith('http') ? href : `${TARGET_URL}${href}`;

        console.log(`Processing story ${i+1}/${storyLinks.length}: ${title.trim()}`);
        
        const storyPage = await context.newPage();
        await storyPage.goto(storyUrl);
        
        // Wait for content (either story text or question container)
        await storyPage.waitForSelector('main, article, h1', { timeout: 15000 });
        
        // Simple check for full text: looking for paragraph elements or a substantial block of text
        const bodyText = await storyPage.innerText('body');
        const hasFullText = bodyText.length > 500; // Heuristic for "full text"

        // Count questions: PIRLS usually has 15.
        // Let's look for common question indicators like numbers followed by a dot, or question marks.
        // On these types of sites, questions are often list items or divs with certain roles.
        // Let's try finding all elements that contain a question number 1-15.
        const questions = await storyPage.locator('h3, .question, fieldset, summary').all();
        // More specific check for PIRLS questions which are often numbered 1 to 15.
        // If the site uses a specific component for questions, we can target it.
        // Let's check for "Прашање" or numbered headers.
        const qCount = await storyPage.locator('fieldset').count(); 
        
        results.stories.push({
            title: title.trim(),
            hasFullText: hasFullText,
            questionCount: qCount,
            url: storyUrl
        });

        await storyPage.close();
    }

  } catch (error) {
    console.error('Error during automation:', error);
  } finally {
    console.log('---RESULTS---');
    console.log(JSON.stringify(results, null, 2));
    console.log('---END---');
    await browser.close();
  }
})();
