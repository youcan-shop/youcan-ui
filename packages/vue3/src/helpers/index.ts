import type { ToastOptions } from '~/components/ToastContainer/types';

const toast = {
  show: (toastOptions: ToastOptions) => {
    const data = { id: 'show-toast', options: toastOptions };
    window.postMessage(data);
  },
};

export { toast };
