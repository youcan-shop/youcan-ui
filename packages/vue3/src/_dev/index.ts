// Import Froala Editor
import 'froala-editor/js/plugins.pkgd.min.js';
// Import Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/languages/ar.js';
import 'froala-editor/js/languages/fr.js';
import 'froala-editor/js/languages/en_gb.js';
import VueFroala from 'vue-froala-wysiwyg';
import { createApp } from 'vue';
import App from './App.vue';
import 'uno.css';
import '@youcan/ui-core/tokens';

const app = createApp(App, {});

app.use(VueFroala);
app.mount('#app');
