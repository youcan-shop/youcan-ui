import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Increment } from '~/components';

type Story = StoryObj<typeof Increment>;
const meta: Meta<typeof Increment> = {
  title: 'Application/Increment',
  component: Increment,
  tags: ['application', 'input', 'number', 'increment'],
  argTypes: {
    modelValue: { table: { disable: true } },
    id: { table: { disable: true } },
  },
  args: {
    step: 10,
    max: 100,
    min: -10,
    disabled: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Increment },
    setup() {
      const value = ref(10);

      return { args, value };
    },
    template: '<Increment v-bind="args" v-model="value" /><span class="sb-c-preview-text">Note: Story not working properly. Value : {{ value }}</span>',
  }),
};

export default meta;
