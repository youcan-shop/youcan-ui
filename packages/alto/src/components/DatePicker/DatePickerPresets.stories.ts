import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import DatePicker from './DatePicker.vue';
import type { DateRangeValue, Preset } from '~/types';
import { getDateDaysAgo, moveToMonth } from '~/helpers';

type Story = StoryObj<typeof DatePicker>;
const meta: Meta<typeof DatePicker> = {
  title: 'Application/DatePicker/Presets',
  component: DatePicker,
  tags: ['modal'],
  argTypes: {
    modelValue: { table: { disable: true } },
    range: { table: { disable: true } },
    minDate: { table: { disable: true } },
    maxDate: { table: { disable: true } },
    presets: { table: { disable: true } },
    locale: {
      control: { type: 'select' },
      options: ['en', 'fr', 'es', 'de', 'ar'],
    },
  },
  args: {
    placeholder: 'Select dates',
    locale: 'en',
    closeOnSelect: true,
    presetsTitle: 'Presets',
  },
};

export const Default: Story = {
  render: args => ({
    components: { DatePicker },
    setup() {
      const range = ref<DateRangeValue>({ start: null, end: null });
      const DateNow = new Date();

      const presets = ref<Preset[]> ([
        {
          label: 'Last 7 days',
          start: getDateDaysAgo(7),
          end: DateNow,
        },
        {
          label: 'Last 30 days',
          start: getDateDaysAgo(30),
          end: DateNow,
          active: true,
        },
        {
          label: 'Last month',
          start: moveToMonth(new Date(), -1),
          end: new Date(DateNow.getFullYear(), DateNow.getMonth(), 0),
        },
        {
          label: 'Last 90 days',
          start: getDateDaysAgo(90),
          end: DateNow,
        },
        {
          label: 'Last 3 months',
          start: moveToMonth(DateNow, -3),
          end: new Date(DateNow.getFullYear(), DateNow.getMonth(), 0),
        },
      ]);

      return { args, range, presets };
    },
    template: '<DatePicker v-model:range="range" :presets="presets" v-bind="args" />',
  }),
};

export default meta;
