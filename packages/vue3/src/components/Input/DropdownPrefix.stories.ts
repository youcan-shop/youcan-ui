import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { DropdownPrefix, Input } from '~/components';

type Story = StoryObj<typeof DropdownPrefix>;
const meta: Meta<typeof DropdownPrefix> = {
  title: 'Application/Inputs/Prefix',
  component: DropdownPrefix,
  tags: ['application', 'input', 'number', 'dropdown', 'prefix'],
  argTypes: {
    modelValue: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    items: { table: { disable: true } },
  },
  args: {
    searchable: false,
  },
};

export const Prefix: Story = {
  render: args => ({
    components: { Input, DropdownPrefix },
    setup() {
      const value = ref(10);
      const currencies = ref([
        { label: 'USD', value: 1 },
        { label: 'EUR', value: 2 },
        { label: 'GBP', value: 3 },
      ]);

      return { args, value, currencies };
    },
    template: `
      <Input v-model="value" type="number">
        <template #prefix>
          <DropdownPrefix v-model="currency" v-bind="args" type="button" :items="currencies" :placeholder="currencies[0].label" />
        </template>
      </Input>
    `,
  }),
};

export default meta;
