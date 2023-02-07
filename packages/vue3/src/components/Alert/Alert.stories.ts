import type { Meta } from '@storybook/vue3';
import Alert from './Alert.vue';

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

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes),
  components: { Alert },
  template: `
    <Alert v-bind="$props" :closeAfterDuration="2000" :type="type"
    >
      <template #title>
        Title of Toast
      </template>
      <template #description>
        Description a Toast description for testing purposes
      </template>
    </Alert>
  `,
});

export const Default = Template.bind({});

export default meta;
