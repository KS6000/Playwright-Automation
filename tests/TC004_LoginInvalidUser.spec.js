const { test, expect } = require('@playwright/test');
const { acceptCookies } = require('../utils/helpers');
const { LoginPage } = require('../pages/LoginPage');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await acceptCookies(page);
});

test('TC004 - Verify user cannot login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login('wrong@email.com', 'wrongpassword');

  await loginPage.verifyLoginError();
});