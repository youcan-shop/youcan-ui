import type { Meta } from '@storybook/vue3';
import Toggle from './Toggle.vue';

const meta: Meta<typeof Toggle> = {
  title: 'Primitive/Toggle',
  component: Toggle,
  tags: ['primitive', 'toggle', 'input', 'on/off', 'switch'],
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
  components: { Toggle },
  template: '<Toggle v-bind="$props" v-model="value" @update:model-value="action" /><span class="sb-c-preview-text">Toggle\'s: {{ value ? "on" : "off" }}</span>',
  methods: { action: (value: boolean) => console.log(`Toggle: ${value}`) },
});

export const Default = Template.bind({});
