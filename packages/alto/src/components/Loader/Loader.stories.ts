import type { Meta, StoryObj } from '@storybook/vue3';
import { Loader } from '~/components';

type Story = StoryObj<typeof Loader>;
const meta: Meta<typeof Loader> = {
  title: 'Application/Loader',
  component: Loader,
  tags: ['loader', 'loading', 'spinner'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['spinner', 'brand', 'bar'],
    },
    labelFontSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    variant: 'spinner',
    size: 40,
    label: '',
    labelFontSize: 'md',
    color: 'var(--brand-500)',
    labelColor: 'var(--brand-500)',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Loader },
    setup() {
      return { args };
    },
    template: '<Loader v-bind="args" />',
  }),
};

export default meta;
