import type { Meta } from '@storybook/vue3';
import Badge from './Badge.vue';

const meta: Meta<typeof Badge> = {
  title: 'Application/Badge',
  component: Badge,
  tags: ['application', 'display', 'badge', 'note'],
  argTypes: {
    size: {
      options: [20, 24],
      control: {
        type: 'select',
      },
    },
    state: {
      options: ['neutral', 'danger', 'info', 'warning', 'success'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    size: 20,
    state: 'neutral',
  },
};
