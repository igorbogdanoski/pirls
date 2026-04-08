const { chromium } = require('playwright');
const fs = require('fs');

const TARGET_URL = process.env.TARGET_URL || 'https://pirls.mismath.net';
const EXPECTED_STORIES_MIN = 19;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const report = {
    timestamp: new Date().toISOString(),
    url: TARGET_URL,
    checks: []
  };

  const pushCheck = (id, status, details) => {
    report.checks.push({ id, status, details });
    console.log(`${id}: ${status} - ${details}`);
  };

  try {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 60000 });

    // Q-01: homepage loaded
    const homeTitle = await page.locator('h1').first().innerText().catch(() => '');
    pushCheck('Q-01', homeTitle.length > 0 ? 'PASS' : 'FAIL', `Home title: ${homeTitle || 'missing'}`);

    // Q-02: story cards count
    const allButtons = await page.locator('button').allInnerTexts();
    const knownStoryTokens = [
      'Тајната на ковчегот', 'Највредниот пронајдок', 'Цвеќиња на покривот', 'Прекрасниот октопод',
      'Тајната на часовничарот', 'Змејот на трпението', 'Балканскиот рис', 'Чичкото со лопатата',
      'Зајакот и земјотресот', 'Морските папагалчиња', 'Летај, Орле, летај', 'Пита за непријателот',
      'Празната саксија', 'Езерската ѕвезда', 'Дедо Ламбе и глувците', 'Забава на планинарење',
      'Мистеријата на џиновскиот заб', 'Тајната на заборавената градина', 'Светлината на Ирското Море'
    ];
    const foundStories = knownStoryTokens.filter(token => allButtons.some(t => t.includes(token)));
    pushCheck('Q-02', foundStories.length >= EXPECTED_STORIES_MIN ? 'PASS' : 'FAIL', `Found ${foundStories.length}/${knownStoryTokens.length} stories`);

    // Q-03: language toggle available
    const hasMk = await page.locator('[data-testid="lang-toggle-mk"]').count();
    const hasSq = await page.locator('[data-testid="lang-toggle-sq"]').count();
    pushCheck('Q-03', hasMk > 0 && hasSq > 0 ? 'PASS' : 'FAIL', `MK=${hasMk}, SQ=${hasSq}`);

    // Q-04: open student join and validate bad code handling
    await page.locator('[data-testid="open-student-join"]').click({ timeout: 15000 });
    await page.locator('[data-testid="student-code-input"]').fill('AAAAAA');
    await page.locator('[data-testid="student-name-input"]').fill('Тест Ученик');
    await page.locator('[data-testid="student-join-submit"]').click();
    await page.waitForTimeout(1200);
    const errorText = await page.locator('[data-testid="student-join-error"]').first().innerText().catch(() => '');
    const joinedState = await page.locator('text=Поврзан на час, text=I lidhur në класë, text=I lidhur në klasë').count();
    if (errorText) {
      pushCheck('Q-04', 'PASS', `Validation message shown: ${errorText}`);
    } else if (joinedState > 0) {
      pushCheck('Q-04', 'FAIL', 'Invalid code appears to allow join (possible demo-mode or validation gap)');
    } else {
      pushCheck('Q-04', 'FAIL', 'No validation message and no explicit join state detected');
    }

    // Q-05: teacher login modal reachable
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
    await page.locator('[data-testid="open-teacher-login"]').click({ timeout: 15000 });
    await page.waitForTimeout(800);
    const pinVisible = await page.locator('[data-testid="teacher-pin-input"]').count();
    const pinPrompt = await page.locator('text=PIN, text=Внесете го PIN кодот, text=Shkruani PIN-in').count();
    pushCheck('Q-05', (pinVisible > 0 || pinPrompt > 0) ? 'PASS' : 'FAIL', `PIN visible=${pinVisible > 0}, prompt=${pinPrompt > 0}`);

    await page.screenshot({ path: 'qa-live-home.png', fullPage: true });

  } catch (err) {
    pushCheck('Q-XX', 'FAIL', `Unhandled error: ${err.message}`);
  } finally {
    fs.writeFileSync('qa-live-report.json', JSON.stringify(report, null, 2));
    await browser.close();
  }
})();
