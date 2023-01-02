import type { Meta } from '@storybook/vue3';
import { Checkbox } from '@youcan/ui-vue3';

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox 🟢',
  component: Checkbox,
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

