import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Alert } from '~/components';

type Story = StoryObj<typeof Alert>;
const meta: Meta<typeof Alert> = {
  title: 'Application/Alert',
  component: Alert,
  tags: ['info', 'alert'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'info', 'error'],
    },
    title: { control: false },
    description: { control: false },
  },
  args: {
    type: 'warning',
    closeAfterDuration: 5000,
    canClose: true,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Alert },
    setup() {
      const show = ref(true);

      return { args, show };
    },
    template: `
    <Alert v-if="show" v-bind="args" @close="show = false">
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
