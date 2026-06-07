import { createApp } from '@backstage/frontend-defaults';
import authPlugin from '@backstage/plugin-auth';

export default createApp({
  features: [
    authPlugin,
  ],
});