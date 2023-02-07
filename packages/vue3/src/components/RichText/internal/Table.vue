<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { swatches } from './swatches';
import { PrimaryButton, SecondaryButton } from '~/components';
import Input from '~/components/Input/Input.vue';

const emit = defineEmits(['insert']);

const rows = ref('2');
const cols = ref('2');

const dropdownRef = ref();
const showDropdown = ref(false);

const setModel = () => {
  emit('insert', { rows: rows.value, cols: cols.value });
};

const toggleDropdown = (show = !showDropdown.value) => showDropdown.value = show;

onClickOutside(dropdownRef, () => {
  toggleDropdown(false);
});
</script>

<template>
  <div class="input-table">
    <SecondaryButton size="sm" @click="toggleDropdown()">
      <template #icon>
        <i
          class="i-youcan-table"
        />
      </template>
    </SecondaryButton>
    <div v-show="showDropdown" ref="dropdownRef" class="table-dropdown">
      <Input v-model="rows" type="number" placeholder="rows" />
      <Input v-model="cols" type="number" placeholder="columns" />
      <PrimaryButton @click="setModel()">
        <template #icon>
          <i class="i-youcan-plus" />
        </template>
        Insert table
      </PrimaryButton>
    </div>
  </div>
</template>

<style scoped>
.input-table {
  position: relative;
}
.table-dropdown {
  position: absolute;
  z-index: 999999;
  margin-top:10px;
  color: var(--gray-500);
  box-shadow: var(--shadow-xs-gray);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
  padding:12px;
  border-radius: 4px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px
}
</style>
