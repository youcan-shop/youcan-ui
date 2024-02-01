import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Dropdown } from '~/components';

type Story = StoryObj<typeof Dropdown>;
const meta: Meta<typeof Dropdown> = {
  title: 'Application/Dropdown',
  component: Dropdown,
  tags: ['dropdown', 'options', 'select'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: [36, 44],
    },
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
    searchHandler: {
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
    size: 36,
    placeholder: 'Select category',
    icon: 'i-youcan-check-circle',
    disabled: false,
    error: false,
    loading: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Dropdown },
    setup() {
      const category = ref(null);

      const items = [
        { label: 'Shoes', value: 1 },
        { label: 'Cosmetics', value: 2 },
        { label: 'Gym', value: 3 },
      ];

      return { args, category, items };
    },
    template: `
    <Dropdown
      v-model="category"
      v-bind="args"
      :items="items"
    />`,
  }),
};

export default meta;
