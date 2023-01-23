import type { Meta } from '@storybook/vue3';
import Table from './Table.vue';
import type { TableData } from './types';

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
      { label: 'Profile', accessor: 'profile' },
    ],
    data: [
      {
        name: 'John Doe',
        age: {
          variant: 'status',
          data: {
            statuses: [{ label: 'Old', color: 'red', value: 42 }, { label: 'Young', color: 'green', value: 22 }],
            modelValue: { label: 'Young', color: 'green', value: 22 },
          },
        },
        email: 'Doe@gmail.com',
      },
      {
        name: 'Ali baba',
        image: {
          variant: 'thumbnail',
          data: {
            size: 'small',
            src: 'https://pbs.twimg.com/profile_images/1581689201568907264/TB8YZOra_400x400.jpg',
          },
        },
        profile: {
          variant: 'link',
          data: {
            href: 'https://twitter.com/hmimsali',
            label: 'Twitter',
          },
        },
        age: 42,
        email: 'Doe@gmail.com',
      },
      { name: 'John Smith', age: 22, email: 'ali@youcan.shop' },
    ] as TableData[],
  },
};
