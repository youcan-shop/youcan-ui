<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const show = ref(false);
const DropdownMenu = ref();

const toggleMenu = () => {
  show.value = !show.value;
};

onClickOutside(DropdownMenu, () => show.value = false);
</script>

<template>
  <div ref="DropdownMenu" class="dropdown-menu-container">
    <div @click="toggleMenu">
      <slot name="trigger" />
    </div>
    <div v-if="show">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.dropdown-menu-container {
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0;
  gap: 5px;
}
</style>
