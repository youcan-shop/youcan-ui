<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import SelectButton from '~/components/_Select/SelectButton.vue';
import SelectMenu from '~/components/_Select/SelectMenu.vue';
import type { SelectItem } from '~/components/_Select/types';

const { modelValue, items, placeholder } = defineProps<{
  items: SelectItem[]
  modelValue: string | undefined
  placeholder?: string
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
</script>

<template>
  <div class="dropdown">
    <SelectButton
      :item="selectedItem" :placeholder="placeholder" @click="shown = !shown"
      @clickOutside="shown = false"
    />
    <SelectMenu v-show="shown" :model-value="selectedItem" :items="items" @update:modelValue="itemSelected" />
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
</style>
