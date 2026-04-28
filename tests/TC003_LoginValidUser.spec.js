const { test, expect } = require('@playwright/test');
const { acceptCookies } = require('../utils/helpers');
const { LoginPage } = require('../pages/LoginPage');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await acceptCookies(page);
});

test('TC003 - Verify user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login('d.hickman5757@gmail.com', 'United101');

  await loginPage.verifyLoginSuccess();
});