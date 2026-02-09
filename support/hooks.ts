import { BeforeAll, Before, After, AfterAll, Status } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import './env';

BeforeAll(async function () {
  console.log('🚀 Starting test suite...');
  // Example: start a mock API server
  // await startMockServer();
});

Before(async function (this: CustomWorld) {
  console.log('📂 Starting scenario...');
  // Example: clear cookies/localStorage before each scenario
  await this.initUi();
  await this.page!.context().clearCookies();
  await this.page!.evaluate(() => localStorage.clear());
});

After(async function (this: CustomWorld, { result }) {
  console.log('🧹 Cleaning up scenario...');
  
  // Take screenshot on failure
  if (result?.status === Status.FAILED) {
    const screenshot = await this.page!.screenshot({
      path: `test-results/failure-${Date.now()}.png`,
      fullPage: true,
    });
    console.log('📸 Screenshot saved on failure');
  }

  await this.cleanup();
});

AfterAll(async function () {
  console.log('✅ Test suite completed.');
  // Example: stop mock server
  // await stopMockServer();
});
