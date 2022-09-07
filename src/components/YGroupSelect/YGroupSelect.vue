<script setup lang="ts">
import { ref, useSlots } from 'vue';
import YButton from '~/components/YButton/YButton.vue';
import YGroupSelectMenu from '~/components/YGroupSelect/YGroupSelectMenu.vue';
import YSelectOption from '~/components/YSelect/YSelectOption.vue';
import { type GroupSelectItem } from '~/components/YGroupSelect/groupSelect.types';

const { selectedIndex = null, items = [] } = defineProps<{
  selectedIndex?: number | null
  items: GroupSelectItem[]
}>();

const selectedOption = ref(selectedIndex !== null ? items[selectedIndex] : null);
const isMenuDisplayed = ref(false);

const hasSubItems = (option: GroupSelectItem): Boolean => {
  return typeof option.subItems !== 'undefined' && option.subItems.length > 0;
};

const hello = (value: string) => {
  console.log(value);
};
</script>

<template>
  <div class="group-select">
    <YButton icon-position="right" class="select-trigger">
      Please select an option
      <template #icon>
        <i i-tabler-selector />
      </template>
    </YButton>
    <YGroupSelectMenu>
      <template v-for="(option, index) in items">
        <YSelectOption v-if="!hasSubItems(option)" :key="index" v-model="option.value" @click="hello">
          <template v-if="option.icon" #icon>
            <i :class="`${option.icon}`" />
          </template>
          {{ option.label }}
        </YSelectOption>
      </template>
    </YGroupSelectMenu>
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
