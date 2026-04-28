const { test, expect } = require('@playwright/test');
const { acceptCookies } = require('../utils/helpers');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await acceptCookies(page);
});

test('TC008 - Verify user can add product to cart', async ({ page }) => {
  await page.getByRole('link', { name: /products/i }).click();

  await expect(page).toHaveURL(/products/);

  // Hover on first product and click "Add to cart"
  await page.locator('.product-image-wrapper').first().hover();
  await page.getByText('Add to cart').first().click();

  // Click "View Cart"
  await page.getByRole('link', { name: /view cart/i }).click();

  // Verify product is in cart
  await expect(page.getByText(/shopping cart/i)).toBeVisible();
});