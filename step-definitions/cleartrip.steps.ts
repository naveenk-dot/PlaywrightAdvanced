import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { getConfig } from '../utils/config';
import { CleartripHomePage } from '../pages/CleartripHomePage';
import { CleartripSearchPage } from '../pages/CleartripSearchPage';
Given('I am on Cleartrip home page', async function (this: CustomWorld) {
  const homePage = new CleartripHomePage(this.page!);
  await homePage.goto(getConfig().cleartripUrl || 'https://www.cleartrip.com');
});

When('I search for flights from {string} to {string} on {string}', async function (this: CustomWorld, from: string, to: string, date: string) {
  const homePage = new CleartripHomePage(this.page!);
  await homePage.searchFlights(from, to, date);
});

When('I click on Hotels', async function (this: CustomWorld) {
  const homePage = new CleartripHomePage(this.page!);
  await homePage.clickHotels();
});

When('I click on Flights', async function (this: CustomWorld) {
  const homePage = new CleartripHomePage(this.page!);
  await homePage.clickFlights();
});

Then('flight results should be displayed', async function (this: CustomWorld) {
  const searchPage = new CleartripSearchPage(this.page!);
  await searchPage.expectResultsVisible();
});

Then('no flights should be found', async function (this: CustomWorld) {
  const searchPage = new CleartripSearchPage(this.page!);
  await searchPage.expectNoResultsMessage();
});

Then('I should see hotels page', async function (this: CustomWorld) {
  await expect(this.page!).toHaveURL(/hotels/);
});

Then('I should see flights search form', async function (this: CustomWorld) {
  await expect(this.page!).toHaveURL(/flights/);
});
