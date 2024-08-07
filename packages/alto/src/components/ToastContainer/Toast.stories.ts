import type { Meta, StoryObj } from '@storybook/vue3';
import ToastContainer from './ToastContainer.vue';
import type { ToastOptions } from '~/types';
import { toast } from '~/helpers';
import { Button } from '~/components';

type Story = StoryObj<typeof ToastContainer>;
const meta: Meta<typeof ToastContainer> = {
  title: 'Application/Toast',
  component: ToastContainer,
  parameters: { layout: 'centered' },
  tags: ['toast container', 'container', 'toast', 'toast manger'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-left', 'bottom-right'],
    },
  },
  args: {
    limit: 3,
    position: 'top-right',
    duration: 3000,
  },
};
export const Default: Story = {
  render: args => ({
    components: { ToastContainer, Button },
    setup() {
      const toasts: ToastOptions[] = [
        {
          title: 'Info',
          description: 'Click here to learn more about the exciting enhancements we\'ve made.',
          type: 'info',
        },
        {
          title: 'Success',
          description: 'Your profile information has been successfully updated.',
          type: 'success',
        },
        {
          title: 'Warning',
          description: 'Please check your internet connection.',
          type: 'warning',
        },
        {
          title: 'Error',
          description: 'Unable to save data, check again later.',
          type: 'error',
        },
      ];
      const handleClick = () => {
        const toastOptions: ToastOptions = toasts[Math.floor(Math.random() * toasts.length)];
        toast.show(toastOptions);
      };

      return { args, handleClick };
    },
    template: '<ToastContainer v-bind="args" /> <Button @click="handleClick" variant="primary"> Show Toast </Button>',
  }),
};

export default meta;
