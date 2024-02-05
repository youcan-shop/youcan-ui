import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { MultiselectDropdown } from '~/components';

type Story = StoryObj<typeof MultiselectDropdown>;
const meta: Meta<typeof MultiselectDropdown> = {
  title: 'Application/Dropdowns/MultiselectDropdown',
  component: MultiselectDropdown,
  tags: ['dropdown', 'options', 'select', 'multi select'],
  argTypes: {
    modelValue: {
      table: {
        disable: true,
      },
    },
    items: {
      table: {
        disable: true,
      },
    },
    accessory: {
      control: false,
    },
  },
  args: {
    searchable: false,
    label: 'Desired languages',
    icon: 'i-youcan-translate',
    error: false,
    loading: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { MultiselectDropdown },
    setup() {
      const desiredLanguages = ref([]);

      const items = [
        { label: 'Arabic', value: 1 },
        { label: 'English', value: 2 },
        { label: 'German', value: 3 },
      ];

      return { args, desiredLanguages, items };
    },
    template: `
    <MultiselectDropdown
      v-model="desiredLanguages"
      v-bind="args"
      :items="items"
    />`,
  }),
};

export default meta;
