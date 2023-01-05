<script setup lang="ts">
import { computed } from 'vue';
import type { DropdownItemArray, DropdownItemDefinition, DropdownItemGroups } from './types';
import DropdownList from './Internal/DropdownList.vue';

const props = withDefaults(
  defineProps<{
    searchable?: boolean
    modelValue: DropdownItemDefinition | null
    items: DropdownItemArray | DropdownItemGroups
  }>(),
  { searchable: false },
);

const emit = defineEmits(['update:modelValue']);

const model = computed<DropdownItemDefinition | null>({
  get: () => props.modelValue,
  set: (item: DropdownItemDefinition | null) => emit('update:modelValue', item),
});
</script>

<template>
  <div>
    <DropdownList v-bind="{ items, searchable, multiple: false }" @select="(i) => model = i" />
  </div>
</template>

<style scoped>

</style>
