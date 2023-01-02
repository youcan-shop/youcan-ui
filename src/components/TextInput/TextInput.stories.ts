import type { Meta } from '@storybook/vue3';
import TextInput from './TextInput.vue';

const meta: Meta<typeof TextInput> = {
  title: 'Primitives/TextInput 🟢',
  component: TextInput,
  tags: ['primitive', 'application', 'input', 'textfield'],
};

export default meta;

export const HasValue = {
  args: {
    modelValue: 'ali@youcan.shop',
    placeholder: 'Please fill this field',
  },
};

export const Placeholder = {
  args: {
    modelValue: '',
    placeholder: 'Please fill this field',
  },
};
