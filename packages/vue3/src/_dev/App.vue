<script setup lang="ts">
import { ref } from 'vue';
import 'uno.css';
import '../assets/main.css';
import { Sidebar, SidebarItem, SidebarSubitem } from '~/components';

const items = [
  {
    label: 'Products',
    active: true,
    icon: 'i-youcan-tag',
    children: [
      { label: 'All Products' },
      { label: 'Categories' },
    ],
  },
  {
    label: 'Insights',
    active: false,
    icon: 'i-youcan-chart-line',
  },
];

const localStorageKey = 'sidebar-collapsed';

const isCollapsed = localStorage.getItem(localStorageKey) === 'true';

const sideBarCollapsed = ref(isCollapsed);

const handleCollapse = (collapsed: boolean) => {
  sideBarCollapsed.value = collapsed;
  localStorage.setItem(localStorageKey, String(collapsed));
};
</script>

<template>
  <div class="container">
    <Sidebar :collapsed="sideBarCollapsed" @collapse="handleCollapse">
      <template #header>
        <p>Awesome App</p>
      </template>
      <template #items>
        <SidebarItem
          v-for="item in items"
          :key="item.label"
          :label="item.label"
          :active="item.active"
          :icon="item.icon"
        >
          <template v-if="item.children">
            <SidebarSubitem
              v-for="subItem in item.children" :key="subItem.label"
              :label="subItem.label"
            />
          </template>
        </SidebarItem>
      </template>
      <template #lower-items>
        <SidebarItem icon="i-youcan-gear" label="Settings" />
      </template>
    </Sidebar>
  </div>
</template>

<style scoped>
.container {
  direction: ltr;
}
</style>
