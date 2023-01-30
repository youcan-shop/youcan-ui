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
      {
        label: 'sidebar.orders.new',
        href: endpointSA('orders.create'),
      },
      {
        label: 'sidebar.orders.abandoned-carts',
        href: endpointSA('abandoned-cart.dashboard'),
      },
    ],
  },
  {
    label: 'sidebar.products.title',
    icon: 'i-youcan-tag',
    href: '',
    children: [
      {
        label: 'sidebar.products.all',
        href: endpointSA('products.index'),
      },
      {
        label: 'sidebar.products.new',
        href: endpointSA('products.create'),
      },
      {
        label: 'sidebar.products.categories',
        href: endpointSA('categories.index'),
      },
      {
        label: 'sidebar.products.reviews',
        href: endpointSA('products.reviews.index'),
      },
      {
        label: 'sidebar.products.inventories',
        href: endpointSA('products.inventory.index'),
      },
    ],
  },
  {
    label: 'sidebar.upsells',
    icon: 'i-youcan-caret-double-up',
    href: '/upsells',
  },
  {
    label: 'sidebar.coupons',
    icon: 'i-youcan-ticket',
    href: '/coupons',
  },
  {
    label: 'sidebar.customers',
    icon: 'i-youcan-users',
    href: '/customers',
  },
  {
    label: 'sidebar.store',
    icon: 'i-youcan-storefront',
    href: '/store',
  },
  {
    label: 'sidebar.insights',
    icon: 'i-youcan-chart-line',
    href: '/insights',
  },
  {
    label: 'sidebar.invoices',
    icon: 'i-youcan-receipt',
    href: '/invoices',
  },
  {
    label: 'sidebar.apps',
    icon: 'i-youcan-squares-four',
    href: '/apps',
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
