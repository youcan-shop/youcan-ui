import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { TextArea } from '~/components';

type Story = StoryObj<typeof TextArea>;
const meta: Meta<typeof TextArea> = {
  title: 'Application/TextArea',
  component: TextArea,
  tags: ['application', 'input', 'Input', 'textarea'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    error: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { TextArea },
    setup() {
      const value = ref('');

      return { args, value };
    },
    template: '<TextArea v-model="value" v-bind="args" placeholder= "Leave your comment" />',
  }),
};

export default meta;
