import { After } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import './env';

After(async function (this: CustomWorld) {
  await this.cleanup();
});
