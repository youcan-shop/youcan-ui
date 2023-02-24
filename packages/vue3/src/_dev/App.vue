<script setup lang="ts">
import { Sidebar, SidebarItem, SidebarSubitem } from '~/components';

import 'uno.css';
import '../assets/main.css';
</script>

<template>
  <Sidebar>
    <template #header>
      Store
    </template>
    <template #items>
      <SidebarItem icon="i-youcan-house-simple" label="Home" />
      <SidebarItem icon="i-youcan-cube" label="Orders">
        <SidebarSubitem label="All Orders" />
        <SidebarSubitem label="Create Orders" />
      </SidebarItem>
      <SidebarItem icon="i-youcan-tag" label="Products">
        <SidebarSubitem label="All Products" />
        <SidebarSubitem label="Create Products" />
      </SidebarItem>
      <SidebarItem icon="i-youcan-squares-four" label="Apps" />
    </template>
    <template #lower-items>
      <SidebarItem icon="i-youcan-headset" label="Support" />
      <SidebarItem icon="i-youcan-gear" label="Settings" />
    </template>
  </Sidebar>
</template>
