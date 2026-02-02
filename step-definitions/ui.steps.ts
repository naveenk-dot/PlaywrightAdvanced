import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { getConfig } from '../utils/config';

Given('I open the home page', async function (this: CustomWorld) {
  await this.initUi();
  await this.page!.goto(getConfig().baseUrl);
});

Then('page title should contain {string}', async function (this: CustomWorld, text: string) {
  await expect(this.page!).toHaveTitle(new RegExp(text));
});
