import { createApp } from 'vue';
import App from 'dev/App.vue';

const application = createApp(App);

application.use(YC_UI, {});

application.mount('#app');
