import type { Meta, StoryObj } from '@storybook/vue3';
import { StaticStatus } from '~/components';

type Story = StoryObj<typeof StaticStatus>;
const meta: Meta<typeof StaticStatus> = {
  title: 'Application/Status/Static',
  component: StaticStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['static', 'static status', 'status'],
  args: {
    status: {
      color: '#ffdecb',
      label: 'Peach 🍑',
      labelColor: '#35192b',
    },
  },
};

export const Static: Story = {
  render: args => ({
    components: { StaticStatus },
    setup() {
      return { args };
    },
    template: '<StaticStatus v-bind="args" />',
  }),
};

export default meta;
