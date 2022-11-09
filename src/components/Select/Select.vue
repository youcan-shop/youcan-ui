<script setup lang="ts">
import { ref } from 'vue';
import SelectButton from './SelectButton.vue';
import SelectMenu from './SelectMenu.vue';
const props = defineProps<{
  items: {
    label: string
    icon?: string
    image?: string
  }[]
}>();
const selected = ref('');
const shown = ref(false);
const hideMenu = () => shown.value = false;
</script>

<template>
  <div class="dropdown">
    <SelectButton v-model="selected" @click="shown = !shown" />
    <SelectMenu v-show="shown" v-model="selected" :items="items" />
  </div>
</template>

<style lang="scss" scoped>
  .dropdown {
    position: relative;
    display: block;
  }
</style>
