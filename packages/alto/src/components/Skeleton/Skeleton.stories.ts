import type { Meta, StoryObj } from '@storybook/vue3';
import { Skeleton } from '~/components';

type Story = StoryObj<typeof Skeleton>;
const meta: Meta<typeof Skeleton> = {
  title: 'Application/Skeleton',
  component: Skeleton,
  tags: ['skeleton', 'loader', 'loading'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'media', 'card'],
    },
    lines: {
      control: { type: 'number' },
      if: { arg: 'type', eq: 'text' },
    },
  },
  args: {
    type: 'text',
    lines: 5,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Skeleton },
    setup() {
      return { args };
    },
    template: '<Skeleton v-bind="args" />',
  }),
};

export default meta;
