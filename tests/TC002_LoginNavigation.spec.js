const { test, expect } = require('@playwright/test');
const { acceptCookies } = require('../utils/helpers');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await acceptCookies(page);
});

test('TC002 - Verify user can navigate to login page', async ({ page }) => {
  await page.getByRole('link', { name: /signup \/ login/i }).click();

  await expect(page).toHaveURL(/login/);
});