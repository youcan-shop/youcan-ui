import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import DatePicker from './DatePicker.vue';
import type { DateRangeValue } from '~/types';

type Story = StoryObj<typeof DatePicker>;
const meta: Meta<typeof DatePicker> = {
  title: 'Application/DatePicker/Range',
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
    placeholder: 'Select dates',
    locale: 'en',
    closeOnSelect: true,
  },
};

export const Default: Story = {
  render: args => ({
    components: { DatePicker },
    setup() {
      const range = ref<DateRangeValue>({ start: null, end: null });

      return { args, range };
    },
    template: '<DatePicker v-model:range="range" v-bind="args" />',
  }),
};

export default meta;
