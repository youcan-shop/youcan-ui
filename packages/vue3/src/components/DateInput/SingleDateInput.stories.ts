import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import SingleDateInput  from './SingleDateInput.vue';

type Story = StoryObj<typeof SingleDateInput>;
const meta: Meta<typeof SingleDateInput> = {
  title: 'Application/Date/Single',
  component: SingleDateInput,
  tags: ['application', 'date', 'input', 'multi', 'select'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    disabled: false,
    placeholder: 'Select date',
  },
};

export const Default: Story = {
  render: args => ({
    components: { SingleDateInput },
    setup() {
      const value = ref(null);

      return { args, value };
    },
    template: '<SingleDateInput v-bind="args" v-model="value"/><span>Date: {{ value }}</span>',
  }),
};

export default meta;
