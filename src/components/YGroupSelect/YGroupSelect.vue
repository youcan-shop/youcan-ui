<script setup lang="ts">
import { ref, useSlots, watch } from 'vue';
import { useFocus } from '@vueuse/core';
import YButton from '~/components/YButton/YButton.vue';
import YGroupSelectMenu from '~/components/YGroupSelect/YGroupSelectMenu.vue';
import YSelectOption from '~/components/YSelect/YSelectOption.vue';
import { type GroupSelectItem } from '~/components/YGroupSelect/groupSelect.types';

const props = defineProps<{
  selectedIndex?: number | null
  items: GroupSelectItem[]
}>();

const isMenuDisplayed = ref(false);

const _base_input = ref();
const { value: { focused } } = ref(useFocus(_base_input));

const toggleMenu = (): void => {
  isMenuDisplayed.value = !isMenuDisplayed.value;
};
</script>

<template>
  <div class="group-select">
    <YButton ref="select_trigger" icon-position="right" class="select-trigger" @click="toggleMenu()">
      Please select an option
      <template #icon>
        <i i-tabler-selector />
      </template>
    </YButton>
    <YGroupSelectMenu v-show="isMenuDisplayed" v-bind="props" />
  </div>
</template>

<style scoped>
  .group-select {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 360px;
  }

  .select-trigger {
    justify-content: space-between;
  }
</style>
