import 'uno.css';
import '../src/assets/main.css';
import '@youcan/ui-core/tokens';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
