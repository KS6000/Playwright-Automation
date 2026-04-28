const { test, expect } = require('@playwright/test');
const { acceptCookies } = require('../utils/helpers');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await acceptCookies(page);
});

test('TC007 - Verify user can search for a product', async ({ page }) => {
  await page.getByRole('link', { name: /products/i }).click();

  await expect(page).toHaveURL(/products/);
  await expect(page.getByText(/all products/i)).toBeVisible();

  await page.getByPlaceholder('Search Product').fill('tshirt');
  await page.locator('#submit_search').click();

  await expect(page.getByText(/searched products/i)).toBeVisible();
});