import type { VueConstructor } from 'vue';
import 'uno.css';
import './assets/main.css';
declare function install(Vue: VueConstructor): void;
export * from './components';
declare const _default: {
    install: typeof install;
};
export default _default;
