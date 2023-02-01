<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { EditableStatus, Info, PrimaryButton, Sidebar, SidebarItem, SidebarSubitem, StaticStatus, TertiaryButton } from '~/components';
import Table from '~/components/Table/Table.vue';
import type { TableActions, TableColumn, TableData } from '~/components/Table/types';
import Input from '~/components/Input/Input.vue';
import RichText from '~/components/RichText/RichText.vue';

const endpointSA = (text: string) => text;

const items = [
  {
    label: 'sidebar.dashboard',
    icon: 'i-youcan-house-simple',
    href: endpointSA('dashboard'),
  },
  {
    label: 'sidebar.orders.title',
    icon: 'i-youcan-cube',
    href: '',
    children: [
      {
        label: 'sidebar.orders.all',
        href: endpointSA('orders.index'),
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
    <RichText />
  </div>
</template>

<style scoped>

</style>
