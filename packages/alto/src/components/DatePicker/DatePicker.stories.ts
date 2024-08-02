import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { DatePicker } from '~/components';
import type { DateValue } from '~/types';

type Story = StoryObj<typeof DatePicker>;
const meta: Meta<typeof DatePicker> = {
  title: 'Application/DatePicker/Single',
  component: DatePicker,
  tags: ['modal'],
  argTypes: {
    modelValue: { table: { disable: true } },
    range: { table: { disable: true } },
    minDate: { table: { disable: true } },
    maxDate: { table: { disable: true } },
    presets: { table: { disable: true } },
    presetsTitle: { table: { disable: true } },
    locale: {
      control: { type: 'select' },
      options: ['en', 'fr', 'es', 'de', 'ar'],
    },
  },
  args: {
    placeholder: 'Select date',
    locale: 'en',
    closeOnSelect: true,
  },
};

export const Default: Story = {
  render: args => ({
    components: { DatePicker },
    setup() {
      const date = ref<DateValue>(null);

      return { args, date };
    },
    template: '<DatePicker v-model="date" v-bind="args" />',
  }),
};

export default meta;
