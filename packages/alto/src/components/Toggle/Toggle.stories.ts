import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Toggle } from '~/components';

type Story = StoryObj<typeof Toggle>;
const meta: Meta<typeof Toggle> = {
  title: 'Application/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['primitive', 'toggle', 'input', 'on/off', 'switch'],
  argTypes: {
    modelValue: { table: { disable: true } },
  },
};

export const Default: Story = {
  render: args => ({
    components: { Toggle },
    setup() {
      const isActive = ref(false);

      return { args, isActive };
    },
    template: '<Toggle v-model="isActive" /> <p> {{ isActive? "On" : "Off" }}</p>',
  }),
};

export default meta;
