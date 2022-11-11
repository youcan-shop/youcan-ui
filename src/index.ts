import type { VueConstructor } from 'vue';
import * as components from './components';
import 'uno.css';
import './assets/main.css';

function install(Vue: VueConstructor) {
  Object.keys(components).forEach((key) => {
    // @ts-expect-error It's okay to have this error
    Vue.component(key, components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) { install(window.Vue); }

export * from './components';

export default { install };
