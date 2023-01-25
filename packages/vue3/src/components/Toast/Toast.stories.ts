import type { Meta } from '@storybook/vue3';
import Toast from './Toast.vue';

const meta: Meta<typeof Toast> = {
  title: 'Application/Toast',
  component: Toast,
  tags: ['toast', 'alert'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['neutral', 'success', 'warning', 'error'],
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
  components: { Toast },
  template: `
    <Toast v-bind="$props" :closeAfterDuration="2000"
    >
      <template #title>
        Title of Toast
      </template>
      <template #description>
        Description a Toast description for testing purposes
      </template>
    </Toast>
  `,
});

export const Default = Template.bind({});

export default meta;
