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
      { label: '', accessor: 'image' },
      { label: 'Name', accessor: 'name', sortable: 'desc' },
      { label: 'Age', accessor: 'age' },
      { label: 'Email', accessor: 'email' },
    ],
    data: [
      { name: 'John Doe', age: 42, email: 'Doe@gmail.com' },
      {
        name: 'Ali baba',
        image: {
          variant: 'thumbnail',
          data: {
            size: 'small',
          },
        },
        age: 42,
        email: 'Doe@gmail.com',
      },
      { name: 'John Smith', age: 22, email: 'Smith@gmail.com' },
    ],
  },
};
