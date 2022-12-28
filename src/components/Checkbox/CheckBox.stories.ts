import type { Meta } from '@storybook/vue3';
import CheckBox from './CheckBox.vue';

const meta: Meta<typeof CheckBox> = {
  title: 'Primitives/CheckBox 🟢',
  component: CheckBox,
  tags: ['primitive', 'input', 'checkbox'],
};

export default meta;

export const Active = {
  args: {
    modelValue: true,
  },
};

export const Inactive = {
  args: {
    modelValue: false,
  },
};

