<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { EditableStatus, PrimaryButton, StaticStatus } from '~/components';
import Table from '~/components/Table/Table.vue';
import type { TableActions, TableColumn, TableData } from '~/components/Table/types';
import Input from '~/components/Input/Input.vue';

const status = ref({ label: 'Success', value: 1, color: '#25B86A' });

const columns: TableColumn[] = [
  { label: '', accessor: 'image' },
  { label: 'Name', accessor: 'name', sortable: 'desc' },
  { label: 'Age', accessor: 'age' },
  { label: 'Email', accessor: 'email' },
  { label: 'Profile', accessor: 'profile' },
];

const data = ref<TableData[]>(
  [
    {
      image: {
        variant: 'button',
        data: {
          label: 'Call to action',
          // iconName: 'i-youcan-x',
        },
        events: {
          click: () => {
            console.log('click');
          },
        },
      },
      profile: {
        variant: 'rating',
        data: {
          modelValue: 3,
        },
      },
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
        },
      },
      profile: {
        variant: 'link',
        data: {
          href: 'https://www.google.com',
          label: 'Facebook',
        },
      },
      age: {
        variant: 'percentage',
        data: {
          percentage: 0,
          type: 'info',
        },
      },
      email: 'n/a',
    },
    {
      name: 'John Smith',
      age: 22,
      email: {
        variant: 'icon',
        data: {
          iconName: 'i-youcan-expand',
        },
        events: {
          click: () => {
            console.log('click');
          },
          mouseover: () => {
            console.log('mouseover');
          },
        },
      },
      profile: {
        variant: 'toggle',
        data: {
          modelValue: true,
        },
      },
      image: {
        variant: 'counter',
        data: {
          modelValue: '1',
        },
      },
    },
  ],
);

const actions: TableActions[] = [
  {
    label: 'Edit',
    iconName: 'i-youcan-edit',
    criteria: (value?: TableData) => !!(value?.age && value?.age > 18),
    events: {
      click: () => {
        console.log('edit');
      },
    },
  },
  {
    label: 'Delete',
    iconName: 'i-youcan-delete',
    events: {
      click: () => {
        console.log('delete');
      },
    },
  },
];

const selectedRows = ref<TableData[]>([]);
</script>

<template>
  <div>
    <PrimaryButton size="sm">
      Primary
    </PrimaryButton>
  </div>
</template>

<style scoped>

</style>
