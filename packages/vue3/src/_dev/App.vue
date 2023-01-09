<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { EditableStatus, StaticStatus } from '~/components';
import Table from '~/components/Table/Table.vue';
import type { TableColumn, TableData } from '~/components/Table/types';

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
      email: 'Doe@gmail.com',
    },
    { name: 'John Smith', age: 22, email: 'Smith@gmail.com' },
  ],
);
</script>

<template>
  <div>
    <Table v-model:data="data" :columns="columns" />
    <textarea id="" name="" cols="30" rows="10" :value="JSON.stringify(data)" />
  </div>
</template>

<style scoped>

</style>
