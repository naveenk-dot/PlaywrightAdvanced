import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I make a GET request to {string}', async function (this: CustomWorld, endpoint: string) {
  await this.initApi();
  this.response = await this.api!.get(endpoint);
});

Then('the response status should be {int}', async function (this: CustomWorld, status: number) {
  expect(this.response!.status()).toBe(status);
});

Then('the response should contain a title', async function (this: CustomWorld) {
  const body = await this.response!.json();
  expect(body).toHaveProperty('title');
});
