import type { Meta, StoryObj } from '@storybook/vue3';
import { Status } from '~/components';

type Story = StoryObj<typeof Status>;
const meta: Meta<typeof Status> = {
  title: 'Application/Status/Static',
  component: Status,
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
    components: { Status },
    setup() {
      return { args };
    },
    template: '<Status v-bind="args" />',
  }),
};

export default meta;
