const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;

        this.loginLink = page.getByRole('link', { name: /signup \/ login/i });
        this.emailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.errorMessage = page.getByText(/incorrect/i);
        this.loggedInText = page.getByText(/logged in as/i);
    }

    async goToLoginPage() {
        await this.loginLink.click();
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
    await expect(this.loggedInText).toBeVisible({ timeout: 60000 });
    await expect(this.loggedInText).toBeVisible();
    }

    async verifyLoginError() {
    await expect(this.errorMessage).toBeVisible();
    }
}

module.exports = { LoginPage };