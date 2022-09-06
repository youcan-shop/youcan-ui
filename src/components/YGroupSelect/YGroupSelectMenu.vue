<script setup lang="ts">
import { ref } from 'vue';
import YInput from '~/components/YInput/Yinput.vue';

const searchValue = ref('');
</script>

<template>
  <div class="menu">
    <div class="search">
      <YInput input-type="text" input-icon="i-tabler-search" placeholder="Searching for something?" />
    </div>
    <div class="menu-options">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .menu {
    display: flex;
    flex-direction: column;
    background-color: var(--Base-White);
    border-radius: 8px;
    border: 1px solid var(--StormGray-100);
  }

  .search {
    padding: 4px;
    border-bottom: 1px solid var(--StormGray-100);
  }

  .menu-options {
    display: flex;
    flex-direction: column;
    background-color: var(--Base-White);
    gap: 4px;
    padding: 4px;
  }
</style>
