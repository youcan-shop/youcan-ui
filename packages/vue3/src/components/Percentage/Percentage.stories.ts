import type { Meta, StoryObj } from '@storybook/vue3';
import { Percentage } from '~/components';

type Story = StoryObj<typeof Percentage>;
const meta: Meta<typeof Percentage> = {
  title: 'Application/Percentage',
  component: Percentage,
  tags: ['application', 'input', 'number', 'Percentage'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'danger'],
    },
  },
  args: {
    percentage: 20,
    type: 'success',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Percentage },
    setup() {
      return { args };
    },
    template: '<Percentage v-bind="args"/>',
  }),
};

export default meta;
