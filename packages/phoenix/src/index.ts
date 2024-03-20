import type { App } from 'vue';
import * as components from './components';
import 'uno.css';
import './assets/main.css';

function install(app: App) {
  for (const key in components) {
    // @ts-expect-error idk man
    app.component(key, components[key]);
  }
}

export * from './components';

export default { install };
