import type { Meta, StoryObj } from '@storybook/vue3';
import { Progress } from '~/components';

type Story = StoryObj<typeof Progress>;
const meta: Meta<typeof Progress> = {
  title: 'Application/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['progress', 'bar', 'circle', 'loading'],
  argTypes: {
    progressType: {
      control: 'select',
      options: ['circle', 'bar'],
    },
    value: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
    },
    maxValue: { table: { disable: true } },
  },
  args: {
    value: 0,
    maxValue: 100,
    size: 110,
    progressType: 'circle',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: '<Progress v-bind="args" />',
  }),
};

export default meta;
