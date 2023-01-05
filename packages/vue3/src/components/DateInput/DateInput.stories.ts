import type { Meta } from '@storybook/vue3';
import { Utils } from '@youcan/ui-core';
import DateInput_ from './DateInput.vue';

const meta: Meta<typeof DateInput_> = {
  title: 'Application/DateInput',
  component: DateInput_,
  tags: ['application', 'date', 'input', 'multi', 'select'],
};

export default meta;

const Template = (args: Record<string, unknown>) => ({
  components: { DateInput_ },
  setup() {
    return { args };
  },
  template: '<DateInput_ v-bind="args" />',
});

export const Test = Utils.templatify(Template.bind({}));

Test.args = {
};
