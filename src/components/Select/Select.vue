<script setup lang="ts">
import { ref } from 'vue';
import SelectInput from './SelectInput.vue';
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
const showOptions = () => shown.value = true;
const hideOptions = () => shown.value = false;
</script>

<template>
  <div class="dropdown">
    <SelectInput @focus="showOptions" @blur="hideOptions" />
    <SelectMenu v-show="shown" v-model="selected" :items="items" />
  </div>
</template>

<style lang="scss" scoped>
  .dropdown {
    position: relative;
    display: block;
    margin: auto;
    .dropdown-content {
      position: absolute;
      background-color: #fff;
      min-width: 248px;
      max-width: 248px;
      max-height: 248px;
      border: 1px solid #e7ecf5;
      box-shadow: 0px -8px 34px 0px rgba(0,0,0,0.05);
      overflow: auto;
      z-index: 1;
      .dropdown-item {
        color: black;
        font-size: .7em;
        line-height: 1em;
        padding: 8px;
        text-decoration: none;
        display: block;
        cursor: pointer;
        &:hover {
          background-color: #e7ecf5;
        }
      }
    }
  }
</style>
