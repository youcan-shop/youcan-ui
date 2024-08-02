import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Dropdown } from '~/components';
import type { DropdownValue } from '~/types';

type Story = StoryObj<typeof Dropdown>;
const meta: Meta<typeof Dropdown> = {
  title: 'Application/Dropdowns/Dropdown',
  component: Dropdown,
  tags: ['dropdown', 'select', 'option', 'options'],
  argTypes: {
    modelValue: { table: { disable: true } },
    items: { table: { disable: true } },
    item: { table: { disable: true } },
    search: { table: { disable: true } },
    clearable: {
      if: { arg: 'multiple', truthy: false },
    },
    selectedItemsLabel: {
      if: { arg: 'multiple', truthy: true },
    },
    limit: {
      if: { arg: 'multiple', truthy: true },
    },
    searchInputPlaceholder: {
      if: { arg: 'searchable', truthy: true },
    },
  },
  args: {
    placeholder: 'Select item',
    disabled: false,
    clearable: false,
    multiple: false,
    selectedItemsLabel: 'Selected items',
    limit: 0,
    emptyStateMessage: 'No results were found',
    searchable: false,
    searchInputPlaceholder: 'Search',
    isLoading: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Dropdown },
    setup() {
      const items: Array<DropdownValue> = [
        { label: 'Arabic', key: 1 },
        { label: 'English', key: 2 },
        { label: 'German', key: 3 },
        { label: 'French', key: 4 },
        { label: 'Dutch', key: 5 },
        { label: 'Hindi', key: 6 },
      ];

      const value = ref(null);

      return { args, items, value };
    },
    template: '<Dropdown v-model="value" v-bind="args" :items="items" />',
  }),
};

export default meta;
