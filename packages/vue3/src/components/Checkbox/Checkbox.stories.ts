/* eslint-disable no-console */
import type { Meta } from '@storybook/vue3';
import Checkbox from './Checkbox.vue';

const meta: Meta<typeof Checkbox> = {
  title: 'Primitive/Checkbox',
  component: Checkbox,
  tags: ['primitive', 'toggle', 'input', 'on/off', 'switch', 'checkbox'],
  argTypes: {
    value: {
      table: { disable: true },
    },
  },
};

export default meta;

const Template = (args: Record<string, unknown>, { argTypes }: Record<string, Record<string, unknown>>) => ({
  props: Object.keys(argTypes).filter(x => x !== 'value'),
  data() {
    return { value: false };
  },
  components: { Checkbox },
  template: '<Checkbox v-bind="$props" v-model="value" @update:model-value="action" /><span class="sb-c-preview-text">Toggle\'s: {{ value ? "on" : "off" }}</span>',
  methods: { action: (value: boolean) => console.log(`Toggle: ${value}`) },
});

export const Default = Template.bind({});
