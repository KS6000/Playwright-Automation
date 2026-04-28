const { test, expect } = require('@playwright/test');
test('TC001 - Verify user can load homepage',async ({ page}) => {
    await page.goto('https://automationexercise.com/');

    await expect(page).toHaveURL('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
});
