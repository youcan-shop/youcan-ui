<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref, watchEffect } from 'vue';
import SelectButton from './SelectButton.vue';
import SelectMenu from './SelectMenu.vue';
import type { SelectItem } from './types';

const { modelValue, items } = defineProps<{
  items: SelectItem[]
  modelValue: string | undefined
}>();

const emit = defineEmits(['update:modelValue']);

const selected = computed(() => modelValue);
const selectedItem = ref<SelectItem>();
const shown = ref(false);

const itemSelected = (item: SelectItem | undefined): void => {
  if (!item) {
    return;
  }

  selectedItem.value = item;
  emit('update:modelValue', selectedItem.value.value);

  shown.value = false;
};

watchEffect(() => selectedItem.value = items.find(item => item.value === selected.value));

const _dropdown_trigger = ref();
onClickOutside(_dropdown_trigger, () => shown.value = false);
</script>

<template>
  <div class="dropdown">
    <SelectButton ref="_dropdown_trigger" :item="selectedItem" placeholder="Please select an option"
      @click="shown = !shown" />
    <SelectMenu v-show="shown" :model-value="selectedItem" :items="items" @update:modelValue="itemSelected" />
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
