import path from 'path';
import UnoCSS from 'unocss/vite';

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "docs": {
    "docsPage": false
  },
  async viteFinal(config, { configType }) {
    config.resolve.alias['~'] =  `${path.resolve(__dirname, 'src')}/`;
    config.plugins.push(UnoCSS);
    return config;
  }
}
