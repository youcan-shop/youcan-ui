import type { Meta, StoryObj } from '@storybook/vue3';
import { Spinner } from '~/components';

type Story = StoryObj<typeof Spinner>;
const meta: Meta<typeof Spinner> = {
  title: 'Application/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['spinner', 'loader', 'loading'],
  args: {
    color: '#B8256E',
    label: 'Loading...',
    size: '40px',
    labelColor: '#B8256E',
    labelFontSize: '10px',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: '<Spinner v-bind="args" />',
  }),
};

export default meta;
