<script setup lang="ts">
import { computed, ref } from 'vue';
import SelectButton from './SelectButton.vue';
import SelectMenu from './SelectMenu.vue';
import type { SelectItem } from './types';

const { modelValue } = defineProps<{
  items: SelectItem[]
  modelValue: SelectItem
}>();

const emit = defineEmits(['update:modelValue']);

const selected = computed(() => modelValue);
const shown = ref(false);

const itemSelected = (): void => {
  emit('update:modelValue', selected.value);
};
</script>

<template>
  <div class="dropdown">
    <SelectButton v-model="selected" placeholder="Please select an option" @click="shown = !shown" />
    <SelectMenu v-show="shown" :model-value="modelValue" :items="items" @update:modelValue="itemSelected" />
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  display: block;

  .dropdown-content {
    margin-top: 7px;
  }
}
</style>
