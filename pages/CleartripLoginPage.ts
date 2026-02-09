import { Page, expect } from '@playwright/test';
import { CleartripLoginPageLocators } from './locators/CleartripLoginPage.locators';

export class CleartripLoginPage {
  constructor(private page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.page.fill(CleartripLoginPageLocators.usernameInput, username);
    await this.page.fill(CleartripLoginPageLocators.passwordInput, password);
    await this.page.click(CleartripLoginPageLocators.loginBtn);
  }

  async expectLoginSuccess() {
    await expect(this.page.locator(CleartripLoginPageLocators.profileMenu)).toBeVisible();
  }

  async expectErrorMessage(message: string) {
    await expect(this.page.locator(CleartripLoginPageLocators.errorMessage)).toContainText(message);
  }

  async logout() {
    await this.page.click(CleartripLoginPageLocators.profileMenu);
    await this.page.click(CleartripLoginPageLocators.logoutBtn);
  }
}
