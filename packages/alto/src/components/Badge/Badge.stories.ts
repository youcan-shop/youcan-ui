import type { Meta, StoryObj } from '@storybook/vue3';
import { Badge } from '~/components';

type Story = StoryObj<typeof Badge>;
const meta: Meta<typeof Badge> = {
  title: 'Application/Badge',
  component: Badge,
  tags: ['application', 'display', 'badge', 'note'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    state: {
      options: ['neutral', 'danger', 'info', 'warning', 'success'],
      control: 'select',
    },
    default: { control: false },
  },
  args: {
    size: 'sm',
    state: 'neutral',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: '<Badge v-bind="args">45</Badge>',
  }),
};

export default meta;
