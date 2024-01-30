import type { Meta, StoryObj } from '@storybook/vue3';
import ColorInput from './ColorInput.vue';

type Story = StoryObj<typeof ColorInput>;
const meta: Meta<typeof ColorInput> = {
  title: 'Application/ColorInput',
  component: ColorInput,
  tags: ['ColorInput', 'ColorPicker'],
};

export const Default: Story = {
  render: args => ({
    components: { ColorInput },
    setup() {
      return { args };
    },
    template: `
    <ColorInput
      v-model="color"
      :preserve-transparency="false"
    />
  `,
  }),
};

export default meta;
