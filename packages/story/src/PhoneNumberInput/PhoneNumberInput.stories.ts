import type { Meta } from '@storybook/vue3';
import { PhoneNumberInput } from '@youcan/ui-vue3';
import type { SelectItem } from '@youcan/ui-vue3/dist/types/components/_Select/types';

/**
 * 1. Style doesn't look good when background is transparent.
 *
 * 2. The UX on this one needs a thorough review. I can't imagine it being user friendly.
 *
 * 3. Dropdown should have an empty state if "items" is empty.
 *
 * 4. Country list with their dial codes should be provided here by default.
 *    Fetch it via an API then store it in localStorage. Then fetch it from there in the next refresh.
 */
const meta: Meta<typeof PhoneNumberInput> = {
  title: 'Application/PhoneNumberInput 🔴',
  component: PhoneNumberInput,
  tags: ['application', 'input', 'phone', 'dropdown'],
};

export default meta;

const items = [
  { label: 'United Arab Emirates', value: '+971', image: 'https://wise.com/public-resources/assets/flags/rectangle/aed.png' },
  { label: 'Morocco', value: '+212', image: 'https://wise.com/public-resources/assets/flags/rectangle/mad.png' },
] as SelectItem[];

export const Default = {
  args: {
    modelValue: '',
    items: [] as SelectItem[],
    dialCode: '',
  },
};

export const EmptyWithItems = {
  args: {
    modelValue: '',
    items,
    dialCode: '+212',
    default: 'Please type your phone number',
  },
};

export const FilledWithItems = {
  args: {
    modelValue: '0688994455',
    items,
    dialCode: '+212',
    default: 'Please type your phone number',
  },
};
