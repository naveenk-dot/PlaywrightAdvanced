const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('search functionality', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the search icon.
  await page.getByRole('button', { name: 'Search' }).click();

  // Fill in the search input.
  await page.getByPlaceholder('Search docs').fill('test');

  // Expect search results to appear.
  await expect(page.getByText('Search results for: test')).toBeVisible();
});
