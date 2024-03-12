<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { SettingsNav, SettingsNavItem } from '~/components';

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
</script>

<template>
  <div class="container">
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
  </div>
</template>

<style scoped>
.container {
  min-width: 100%;
}

.settings-nav {
  color: black;
}
</style>
