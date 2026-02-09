import { Page, expect } from '@playwright/test';
import { CleartripHomePageLocators } from './locators/CleartripHomePage.locators';

export class CleartripHomePage {
  constructor(private page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async searchFlights(from: string, to: string, departureDate: string) {
    await this.page.fill(CleartripHomePageLocators.fromAirportInput, from);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    await this.page.fill(CleartripHomePageLocators.toAirportInput, to);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    await this.page.fill(CleartripHomePageLocators.departureDateInput, departureDate);
    await this.page.keyboard.press('Enter');

    await this.page.click(CleartripHomePageLocators.searchBtn);
  }

  async clickHotels() {
    await this.page.click(CleartripHomePageLocators.hotelsLink);
  }

  async clickFlights() {
    await this.page.click(CleartripHomePageLocators.flightsLink);
  }

  async expectPageTitleToContain(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text));
  }
}
