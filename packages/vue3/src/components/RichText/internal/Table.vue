<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { PrimaryButton, TertiaryButton } from '~/components';
import Input from '~/components/Input/Input.vue';

const emit = defineEmits(['insert']);

const rows = ref('');
const cols = ref('');

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
    <TertiaryButton size="sm" icon-position="only" @click="toggleDropdown()">
      <template #icon>
        <i
          class="i-youcan-table"
        />
      </template>
    </TertiaryButton>
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
  display: flex;
  position: absolute;
  z-index: 999999;
  flex-direction: column;
  width: 200px;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  gap: 20px;
}
</style>
