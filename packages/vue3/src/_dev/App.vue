<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { EditableStatus, StaticStatus } from '~/components';
import Table from '~/components/Table/Table.vue';
import type { TableActions, TableColumn, TableData } from '~/components/Table/types';

const endpointSA = (text: string) => text;

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
      row: {
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
      children: [
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
      ],
    },
    {
      row: {
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
    },
  ],
);

const actions: TableActions[] = [
  {
    label: 'Delete',
    iconName: 'i-youcan-trash',
    events: {
      click: () => {
        console.log('delete');
      },
    },
  },
];

const subItems = [
  {
    label: 'sidebar.affiliate',
    icon: 'i-youcan-share-network',
    href: '/affiliate',
  },
  {
    label: 'sidebar.support',
    icon: 'i-youcan-headset',
    href: '/support',
  },
  {
    label: 'sidebar.settings',
    icon: 'i-youcan-gear',
    href: '/settings',
  },
];
</script>

<template>
  <div>
    <Table v-model:data="data" v-model:selected-rows="selectedRows" :columns="columns" :actions="actions"
      :selectable="true" />
    <textarea id="" name="" cols="100" rows="10" :value="JSON.stringify(data)" />
    <textarea id="" name="" cols="100" rows="10" :value="JSON.stringify(selectedRows)" />
  </div>
</template>

<style scoped>

</style>
