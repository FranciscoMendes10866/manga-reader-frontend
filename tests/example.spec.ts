import { test } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=Featured
  await page.click('text=Featured');

  // Click text=Latest
  await page.click('text=Latest');

  // Click text=Browse
  await page.click('text=Browse');

  // Click text=Favorited
  await page.click('text=Favorited');

  // Click button
  await page.click('button');
});
