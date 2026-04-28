const { test, expect } = require('@playwright/test');
const { acceptCookies } = require('../utils/helpers');
const { LoginPage } = require('../pages/LoginPage');

test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await acceptCookies(page);
});

test('TC005 - Verify user can log out successfully', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Logout test runs only in Chromium due to demo site instability');

  const loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login('d.hickman5757@gmail.com', 'United101');

  await loginPage.verifyLoginSuccess();

  await page.getByRole('link', { name: /logout/i }).click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByText(/login to your account/i)).toBeVisible();
});
