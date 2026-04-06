import { Locator, Page } from '@playwright/test'

export class LoginPage {

    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameTextBox = page.locator('[data-test="username"]');
        this.passwordTextBox = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
    }

    async openApplication() {
        await this.page.goto('https://www.saucedemo.com')
    }

    async login(username: string, password: string) {
        await this.usernameTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginBtn.click();
    }
}