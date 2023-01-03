import type { Meta } from '@storybook/vue3';
import Toggle from './Toggle.vue';

const meta: Meta<typeof Toggle> = {
  title: 'Primitive/Toggle',
  component: Toggle,
  tags: ['primitive', 'toggle', 'input', 'on/off', 'switch'],
};

export default meta;

export const Default = {
  args: {
  },
};
