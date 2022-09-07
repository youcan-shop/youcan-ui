<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import YInput from '~/components/YInput/Yinput.vue';
import YButton from '~/components/YButton/YButton.vue';

const searchValue = ref('');
const isSearching = computed(() => searchValue.value.length > 0);
</script>

<template>
  <div class="menu">
    <div class="search">
      <YInput
        v-model="searchValue"
        input-type="text"
        input-icon="i-tabler-search"
        placeholder="Search..."
        :can-reset="true"
      />
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
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    border-bottom: 1px solid var(--StormGray-100);
  }

  .menu-options {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px;
    max-height: 196px;
    overflow-y: auto;
  }
</style>
