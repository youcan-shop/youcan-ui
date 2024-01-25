import type { Meta, StoryObj } from '@storybook/vue3';
import Alert from './Alert.vue';

type Story = StoryObj<typeof Alert>;
const meta: Meta<typeof Alert> = {
  title: 'Application/Alert',
  component: Alert,
  tags: ['info', 'alert'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['success', 'warning', 'info'],
    },

    closeAfterDuration: {
      control: {
        type: 'number',
      },
    },
  },
};

export const Default: Story = {
  render: args => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: `
    <Alert v-bind="args">
      <template #title>
        Title of Toast
      </template>
      <template #description>
        Description a Toast description for testing purposes
      </template>
    </Alert>
  `,
  }),
};

export default meta;
