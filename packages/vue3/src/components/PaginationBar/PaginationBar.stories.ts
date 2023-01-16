import type { Meta } from '@storybook/vue3';
import PaginationBar from './PaginationBar.vue';

const meta: Meta<typeof PaginationBar> = {
  title: 'Application/PaginationBar',
  component: PaginationBar,
  tags: ['application', 'input', 'pagination'],
};

export default meta;

export const Default = {
  args: {
    count: 2,
    total: 14,
    current: 5,
    size: 20,
  },
};
