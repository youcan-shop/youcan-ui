import type { ToastOptions } from './types';

export const showToast = (toastOptions: ToastOptions) => {
  const data = { id: 'show-toast', options: toastOptions };
  window.postMessage(data);
};
