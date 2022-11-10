<script setup lang="ts">
import { ref } from 'vue';
import SelectButton from './SelectButton.vue';
import SelectMenu from './SelectMenu.vue';
import type { SelectItem } from './types';

const props = defineProps<{
  items: SelectItem[]
}>();

const selected = ref();
const shown = ref(false);
</script>

<template>
  <div class="dropdown">
    <SelectButton v-model="selected" placeholder="Please select an option" @click="shown = !shown" />
    <SelectMenu v-show="shown" v-model="selected" :items="items" />
  </div>
</template>

<style lang="scss" scoped>
  .dropdown {
    position: relative;
    display: block;

    .dropdown-content {
      position: absolute;
      top: 63px;
    }
  }
</style>
