import { defineConfig } from 'wxt';
import { version } from './package.json';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  manifest: {
    name: '__MSG_extName__',
    version,
    description: '__MSG_extDescription__',
    default_locale: 'en',
  },
});
