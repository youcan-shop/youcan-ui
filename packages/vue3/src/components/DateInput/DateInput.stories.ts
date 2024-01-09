/* eslint-disable no-console */
import type { Meta } from '@storybook/vue3';
import DateInput_ from './DateInput.vue';

const meta: Meta<typeof DateInput_> = {
  title: 'Application/DateInput',
  component: DateInput_,
  tags: ['application', 'date', 'input', 'multi', 'select'],
};

export default meta;

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes).filter(x => x !== 'value'),
  data() {
    return {
      value: {
        // start: null,
        // end: null,
      },
    };
  },
  components: { DateInput_ },
  template: '<DateInput_ v-bind="$props" v-model="value" @update:model-value="action" /><span class="sb-c-preview-text">Date: {{ value }}</span>',
  methods: { action: (value: boolean) => console.log(`Date: ${value}`) },
});

export const Default = Template.bind({});
