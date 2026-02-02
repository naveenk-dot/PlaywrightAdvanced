import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, APIRequestContext, Browser, BrowserContext, Page, request, APIResponse } from '@playwright/test';
import { getConfig } from '../utils/config';

export class CustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  api?: APIRequestContext;
  response?: APIResponse;

  constructor(options: IWorldOptions) { super(options); }

  async initUi() {
    if (!this.browser) {
      this.browser = await chromium.launch({ headless: getConfig().headless });
      this.context = await this.browser.newContext();
      this.page = await this.context.newPage();
    }
  }

  async initApi() {
    if (!this.api) {
      this.api = await request.newContext({ baseURL: getConfig().apiBaseUrl });
    }
  }

  async cleanup() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
    await this.api?.dispose();
  }
}

setWorldConstructor(CustomWorld);
