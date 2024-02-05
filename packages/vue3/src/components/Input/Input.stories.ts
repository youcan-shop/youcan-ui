import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Input } from '~/components';

type Story = StoryObj<typeof Input>;
const meta: Meta<typeof Input> = {
  title: 'Application/Inputs/Input',
  component: Input,
  tags: ['application', 'input', 'number', 'Input'],
  argTypes: {
    modelValue: {
      table: {
        disable: true,
      },
    },
    prefix: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    suffix: {
      table: {
        disable: true,
      },
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'],
    },
    canShow: {
      control: {
        type: 'boolean',
      },
      description: 'This option work only when type is password to enable show or hide',
    },
  },
  args: {
    type: 'text',
    error: false,
    canShow: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Input },
    setup() {
      const value = ref('');

      return { args, value };
    },
    template: ' <Input v-model="value" v-bind="args" placeholder="Please enter your username" />',
  }),
};

export default meta;
