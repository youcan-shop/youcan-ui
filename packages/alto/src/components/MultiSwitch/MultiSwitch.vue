<script setup lang="ts">
import { ref } from 'vue';
import SwitchButton from './SwitchButton.vue';
import type { MultiSwitchProps, SwitchButtonOption } from '~/types';

const props = defineProps<MultiSwitchProps>();

const emit = defineEmits(['update:modelValue']);

const activeOption = ref<SwitchButtonOption>(props.modelValue);

const setActiveOption = (option: SwitchButtonOption) => {
  activeOption.value = option;
  emit('update:modelValue', option);
};
</script>

<template>
  <div class="list">
    <SwitchButton
      v-for="(option) in options"
      :key="option.value"
      :option="option"
      :active="activeOption?.value === option.value"
      @click="setActiveOption(option)"
    />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  padding: 4px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background: var(--gray-50);
  gap: 4px;
}

@media screen and (width < 768px) {
  .list {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
}
</style>
