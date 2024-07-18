import type { Meta, StoryObj } from '@storybook/vue3';
import { Breadcrumbs } from '~/components';

type Story = StoryObj<typeof Breadcrumbs>;

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['navigation', 'breadcrumbs', 'path'],
  argTypes: {
    maxVisibleItems: {
      control: 'number',
      description: 'Maximum number of items to display before truncating',
    },
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
    },
  },
  args: {
    maxVisibleItems: 4,
    items: [
      { label: 'Home', to: '/' },
      { label: 'Category', to: '/category' },
      { label: 'Subcategory', to: '/category/subcategory' },
      { label: 'Current Page', to: '/category/subcategory/current-page' },
    ],
  },
};

export const Default: Story = {
  render: args => ({
    components: { Breadcrumbs },
    setup() {
      return { args };
    },
    template: '<Breadcrumbs v-bind="args" />',
  }),
};

export const WithTruncation: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Category 1', to: '/category-1' },
      { label: 'Subcategory 1', to: '/category-1/subcategory-1' },
      { label: 'Item 1', to: '/category-1/subcategory-1/item-1' },
      { label: 'Subitem 1', to: '/category-1/subcategory-1/item-1/subitem-1' },
      { label: 'Detail', to: '/category-1/subcategory-1/item-1/subitem-1/detail' },
    ],
    maxVisibleItems: 4,
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
    ],
  },
};

export default meta;
