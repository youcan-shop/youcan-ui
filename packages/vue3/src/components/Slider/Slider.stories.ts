import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Slider } from '~/components';

type Story = StoryObj<typeof Slider>;
const meta: Meta<typeof Slider> = {
  title: 'Application/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['skeleton', 'loader', 'loading'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
  args: {
    max: 500,
    min: 0,
    disabled: false,
    prefix: '$',
    suffix: '',
  },
};

export const Default: Story = {
  render: args => ({
    components: { Slider },
    setup() {
      const value = ref(5);

      return { args, value };
    },
    template: '<div style="width:300px"> <Slider v-model="value" v-bind="args" /> </div>',
  }),
};

export default meta;
