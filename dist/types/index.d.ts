import type { App } from 'vue';
import 'uno.css';
import './assets/main.scss';
declare function install(app: App): void;
declare const _default: {
    install: typeof install;
};
export default _default;
export * from './components';
export * from './constants';
export * from './utils';
