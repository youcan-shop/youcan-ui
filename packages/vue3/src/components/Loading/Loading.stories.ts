import type { Meta } from '@storybook/vue3';
import Loading from './Loading.vue';

const meta: Meta<typeof Loading> = {
  title: 'Application/Loading',
  component: Loading,
  tags: ['application', 'display', 'loading'],
};

export default meta;

export const Default = {
  args: {
  },
};
