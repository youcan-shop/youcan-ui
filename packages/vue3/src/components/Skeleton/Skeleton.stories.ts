import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Skeleton } from '~/components';

type Story = StoryObj<typeof Skeleton>;
const meta: Meta<typeof Skeleton> = {
  title: 'Application/Skeleton',
  component: Skeleton,
  tags: ['skeleton', 'loader', 'loading'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'media'],
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
      const value = ref(5);

      return { args, value };
    },
    template: '<Skeleton v-bind="args" />',
  }),
};

export default meta;
