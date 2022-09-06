<script setup lang="ts">
import { ref } from 'vue';
import YButton from '~/components/YButton/YButton.vue';
import YGroupSelectMenu from '~/components/YGroupSelect/YGroupSelectMenu.vue';
import YSelectOption from '~/components/YSelect/YSelectOption.vue';

// defineProps<{}>();

const selectedOption = ref(null);
const isMenuDisplayed = ref(false);
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
      <YSelectOption>Select option</YSelectOption>
      <YSelectOption>
        Select option
        <template #icon>
          <i i-tabler:scooter-electric />
        </template>
      </YSelectOption>
    </YGroupSelectMenu>
  </div>
</template>

<style scoped>
  .group-select {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 320px;
  }

  .select-trigger {
    justify-content: space-between;
  }
</style>
