import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { DateInput } from '~/components';

type Story = StoryObj<typeof DateInput>;
const meta: Meta<typeof DateInput> = {
  title: 'Application/DateInput',
  component: DateInput,
  tags: ['application', 'date', 'input', 'multi', 'select'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    disabled: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { DateInput },
    setup() {
      const value = ref({ start: null, end: null });

      return { args, value };
    },
    template: '<DateInput v-bind="args" v-model="value"/><span>Date: {{ value }}</span>',
  }),
};

export default meta;
