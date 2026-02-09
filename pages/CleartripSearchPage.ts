import { Page, expect } from '@playwright/test';
import { CleartripSearchPageLocators } from './locators/CleartripSearchPage.locators';

export class CleartripSearchPage {
  constructor(private page: Page) {}

  async expectResultsVisible() {
    await expect(this.page.locator(CleartripSearchPageLocators.flightResults)).toBeVisible();
  }

  async selectFirstFlight() {
    await this.page.click(CleartripSearchPageLocators.firstFlightCard);
  }

  async clickBookNow() {
    await this.page.click(CleartripSearchPageLocators.bookNowBtn);
  }

  async expectNoResultsMessage() {
    await expect(this.page.locator(CleartripSearchPageLocators.noResultsMessage)).toBeVisible();
  }
}
