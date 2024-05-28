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
  argTypes: {
    labelFontSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      if: { arg: 'label' },
    },
    labelColor: {
      if: { arg: 'label' },
    },
  },
  args: {
    color: '#B8256E',
    size: 50,
    label: '',
    labelColor: '#B8256E',
    labelFontSize: 'md',
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
