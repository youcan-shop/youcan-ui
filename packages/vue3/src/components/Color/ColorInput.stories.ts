import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { ColorInput } from '~/components';

type Story = StoryObj<typeof ColorInput>;
const meta: Meta<typeof ColorInput> = {
  title: 'Application/ColorInput',
  component: ColorInput,
  tags: ['color', 'color input', 'color picker'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    preserveTransparency: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { ColorInput },
    setup() {
      const value = ref('#979797');

      return { args, value };
    },
    template: ' <ColorInput v-model="value" v-bind="args"/> ',
  }),
};

export default meta;
