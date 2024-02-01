/* eslint-disable no-console */
import type { Meta } from '@storybook/vue3';
import Increment_ from './Increment.vue';

const meta: Meta<typeof Increment_> = {
  title: 'Application/Increment',
  component: Increment_,
  tags: ['application', 'input', 'number', 'increment'],
};

export default meta;

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes).filter(x => x !== 'value'),
  data() {
    return {
      value: '1',
      step: 10,
      max: 100,
      min: -10,
      disabled: false,
    };
  },
  components: { Increment_ },
  template: '<Increment_ v-bind="$props" v-model="value" @update:model-value="action" /><span class="sb-c-preview-text">Note: Story not working properly. Value : {{ value }}</span>',
  methods: { action: (value: boolean) => console.log(`Increment value: ${value}`) },
});

export const Default = Template.bind({});
