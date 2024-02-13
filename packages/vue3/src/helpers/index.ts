import type { ToastOptions } from '../types/index';

const toast = {
  show: (toastOptions: ToastOptions) => {
    const data = { id: 'show-toast', options: toastOptions };
    window.postMessage(data);
  },
};

export { toast };
