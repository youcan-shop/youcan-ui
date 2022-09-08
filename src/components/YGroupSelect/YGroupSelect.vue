<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import YButton from '~/components/YButton/YButton.vue';
import YGroupSelectMenu from '~/components/YGroupSelect/YGroupSelectMenu.vue';
import { type GroupSelectItem } from '~/components/YGroupSelect/groupSelect.types';

const props = defineProps<{
  selectedIndex?: number | null
  items: GroupSelectItem[]
}>();

const isMenuDisplayed = ref(false);

const toggleMenu = (state = !isMenuDisplayed.value): void => {
  if (isMenuDisplayed.value === state) {
    return;
  }

  isMenuDisplayed.value = state;
};

const _group_select = ref();
onClickOutside(_group_select, () => toggleMenu(false));
</script>

<template>
  <div ref="_group_select" class="group-select">
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
