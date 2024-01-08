<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { SettingsNav, SettingsNavItem, Sidebar, SidebarItem, Skeleton } from '~/components';

const SETTINGS = [
  { label: 'General', icon: 'i-youcan-gear' },
  { label: 'Account', icon: 'i-youcan-user' },
  { label: 'Privacy', icon: 'i-youcan-lock' },
  { label: 'Appearance', icon: 'i-youcan-palette' },
  { label: 'Subscriptions', icon: 'i-youcan-receipt' },
];
const activeTab = ref(SETTINGS[0].label);

const handleClick = (tab: string) => {
  activeTab.value = tab;
};
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
</script>

<template>
  <div class="container">
    <Sidebar>
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
    <SettingsNav>
      <template #header>
        <p>Settings</p>
      </template>
      <template #items>
        <SettingsNavItem
          v-for="item in SETTINGS"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          :active="activeTab === item.label"
          @click="() => handleClick(item.label)"
        />
      </template>
    </SettingsNav>
    <Skeleton type="text" :lines="5" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  min-width: 100%;
}
</style>
