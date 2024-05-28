import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Input } from '~/components';

type Story = StoryObj<typeof Input>;
const meta: Meta<typeof Input> = {
  title: 'Application/Inputs/Input',
  component: Input,
  tags: ['application', 'input', 'number', 'Input'],
  argTypes: {
    modelValue: { table: { disable: true } },
    suffix: { table: { disable: true } },
    type: {
      control: 'select',
      options: ['email', 'hidden', 'number', 'password', 'search', 'tel', 'text', 'url'],
    },
    canShow: {
      control: { type: 'boolean' },
      if: { arg: 'type', eq: 'password' },
    },
  },
  args: {
    type: 'text',
    error: false,
    canShow: false,
  },
};

export const Input_: Story = {
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
