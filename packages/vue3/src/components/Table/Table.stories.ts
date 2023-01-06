import type { Meta } from '@storybook/vue3';
import Table from './Table.vue';

const meta: Meta<typeof Table> = {
  title: 'Application/Table',
  component: Table,
  tags: ['application', 'display', 'table', 'data', 'grid'],
};

export default meta;

export const Default = {
  args: {
    columns: [
      { label: 'Name', accessor: 'name', sortable: 'desc' },
      { label: 'Age', accessor: 'age' },
      { label: 'Email', accessor: 'email' },
    ],
  },
};
