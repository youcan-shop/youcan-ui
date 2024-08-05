import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Table from './Table.vue';
import type { TableColumn } from '~/types';

type Story = StoryObj<typeof Table>;
const meta: Meta<typeof Table> = {
  title: 'Application/Table',
  /* @ts-expect-error: Suppress unknown generic type error for Table component */
  component: Table,
  tags: ['table', 'data', 'display', 'items', 'rows'],
  argTypes: {
    tableColumns: { table: { disable: true } },
    items: { table: { disable: true } },
  },
  args: {
    tableId: 'users-list',
    selectable: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Table },
    setup() {
      interface User {
        id?: string
        name?: string
        age?: number
      }

      const tableColumns = ref<TableColumn[]>([
        { label: 'Id', key: 'id', sortable: false },
        { label: 'Name', key: 'name', sortable: true, order: 'asc' },
        { label: 'Age', key: 'age', sortable: true },
      ]);

      const data: User[] = [
        { id: 'U-0001', name: 'Jack WILLIAMS', age: 40 },
        { id: 'U-0002', name: 'Cairo Lowery', age: 43 },
        { id: 'U-0003', name: 'Isaiah McFarland', age: 30 },
        { id: 'U-0004', name: 'Cain Shields', age: 24 },
        { id: 'U-0005', name: 'Kane Glover', age: 56 },
        { id: 'U-0006', name: 'Armani Decker', age: 40 },
      ];

      const users = ref<User[]>(data);

      return { args, users, tableColumns };
    },
    template: '<Table v-bind="args" :table-columns="tableColumns" :items="users" />',
  }),
};

export default meta;
