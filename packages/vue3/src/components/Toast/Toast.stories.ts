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
        options: ['neutral', 'success', 'warning', 'error'],
      },
    },
    hasIcon: {
      control: {
        type: 'boolean',
      },
    },
    canClose: {
      control: {
        type: 'boolean',
      },
    },
    hasActions: {
      control: {
        type: 'boolean',
      },
    },
    primaryButton: {
      control: {
        type: 'text',
      },
    },
    secondaryButton: {
      control: {
        type: 'text',
      },
    },
    closeAfter: {
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
    <Toast v-bind="$props" :type="type" :hasIcon="hasIcon" :canClose="canClose" :hasActions="hasActions" :primaryButton="primaryButton" :secondaryButton="secondaryButton" :closeAfter="closeAfter"
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
