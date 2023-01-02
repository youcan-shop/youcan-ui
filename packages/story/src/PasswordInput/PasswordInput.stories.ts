import type { Meta } from '@storybook/vue3';
import { PasswordInput } from '@youcan/ui-vue3';

const meta: Meta<typeof PasswordInput> = {
  title: 'Application/PasswordInput 🔴',
  component: PasswordInput,
  tags: ['application', 'input', 'password'],
};

export default meta;

export const Default = {
  args: {
    modelValue: '',
    placeholder: 'Please type your password',
  },
};

export const PasswordDisplayed = {
  args: {
    modelValue: 'password',
    placeholder: 'Please type your password',
    passwordHidden: false,
  },
};

export const PasswordHidden = {
  args: {
    modelValue: 'password',
    placeholder: 'Please type your password',
    passwordHidden: true,
  },
};
