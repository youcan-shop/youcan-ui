<script setup lang="ts">
import { DateUtils } from '@youcan/ui-core';
import { computed } from 'vue';
import TertiaryButtonVue from '~/components/Button/TertiaryButton.vue';

const props = defineProps<{
  modelValue: Date
}>();

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: Date) => emit('update:modelValue', value),
});

const changeMonth = (increment: boolean) => {
  const newDate = new Date(model.value);
  newDate.setMonth(newDate.getMonth() + (increment ? 1 : -1));

  model.value = newDate;
};
</script>

<template>
  <div class="month-switcher">
    <TertiaryButtonVue icon-position="only" size="xs" @click="changeMonth(false)">
      <template #icon>
        <i class="i-youcan-caretleft" />
      </template>
    </TertiaryButtonVue>
    <span class="text">{{ DateUtils.getAlphabeticalMonth(model) }} {{ model.getFullYear() }}</span>
    <TertiaryButtonVue icon-position="only" size="xs" @click="changeMonth(true)">
      <template #icon>
        <i class="i-youcan-caretright" />
      </template>
    </TertiaryButtonVue>
  </div>
</template>

<style scoped>
.month-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.month-switcher .text {
  font: var(--text-sm-medium);
  color: var(--gray-900);
}
</style>
