const { test, expect } = require('@playwright/test');
const { acceptCookies } = require('../utils/helpers');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await acceptCookies(page);
});

test('TC006_Verify user can navigate to Products page', async ({ page }) => {
    await page.goto('https://automationexercise.com/products');

    await expect(page).toHaveURL(/products/i);
    await expect(page.getByText(/all products/i)).toBeVisible();
});