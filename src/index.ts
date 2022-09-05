import type { App } from 'vue';
import * as components from './components';
import 'uno.css';
import './assets/main.scss';

function install(app: App) {
  for (const key in components) {
    // @ts-expect-error idk man
    app.component(key, components[key]);
  }
}

export default { install };

export * from './components';
export * from './constants';
export * from './utils';
