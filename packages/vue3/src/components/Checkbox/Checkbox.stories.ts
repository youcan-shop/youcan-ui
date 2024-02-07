import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Checkbox } from '~/components';

type Story = StoryObj<typeof Checkbox>;
const meta: Meta<typeof Checkbox> = {
  title: 'Application/Checkbox',
  component: Checkbox,
  tags: ['toggle', 'input', 'on/off', 'switch', 'checkbox'],
  argTypes: {
    value: { table: { disable: true } },
    modelValue: { table: { disable: true } },
    label: { control: false },
  },
};

export const Default: Story = {
  render: args => ({
    components: { Checkbox },
    setup() {
      const value = ref(false);

      return { args, value };
    },
    template: '<Checkbox v-model="value" /><span>Toggle\'s: {{ value ? "on" : "off" }}</span>',
  }),
};

export default meta;
