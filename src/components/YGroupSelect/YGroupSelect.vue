<script setup lang="ts">
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import YButton from '~/components/YButton/YButton.vue';
import YGroupSelectMenu from '~/components/YGroupSelect/YGroupSelectMenu.vue';
import { type GroupSelectItem } from '~/components/YGroupSelect/groupSelect.types';
import { launder } from '~/utils/type.util';

const { selectedItem = null, items = [] } = defineProps<{
  selectedItem?: GroupSelectItem | null
  items: GroupSelectItem[]
}>();

const isMenuDisplayed = ref(false);
const selectedOption = ref(selectedItem);
const optionToDisplay = computed(() => {
  if (selectedOption.value !== null) {
    return selectedOption.value;
  }

  return 'Please select an option';
});

const toggleMenu = (state = !isMenuDisplayed.value): void => {
  if (isMenuDisplayed.value === state) {
    return;
  }

  isMenuDisplayed.value = state;
};

const _group_select = ref();
onClickOutside(_group_select, () => toggleMenu(false));

const hello = (value: GroupSelectItem) => {
  toggleMenu(false);

  selectedOption.value = value;
};
</script>

<template>
  <div ref="_group_select" class="group-select">
    <YButton ref="select_trigger" icon-position="right" class="select-trigger" @click="toggleMenu()">
      {{ launder<GroupSelectItem>(optionToDisplay).label || optionToDisplay }}
      <template #icon>
        <i i-tabler-selector />
      </template>
    </YButton>
    <YGroupSelectMenu v-show="isMenuDisplayed" v-bind="{ selectedItem: selectedOption, items }" @selectOption="hello" />
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
