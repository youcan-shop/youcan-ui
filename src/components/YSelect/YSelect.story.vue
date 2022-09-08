<script setup lang="ts">
import YSelect from './YSelect.vue';
import YSelectOption from './YSelectOption.vue';

const items = [
  { label: 'Select option', value: 1 },
];
</script>

<template>
  <Story>
    <YSelect>
      <YSelectOption v-model="items[0]">
        Hmmm
      </YSelectOption>
      <YSelectOption v-model="items[0]">
        Select option
        <template #icon>
          <i i-tabler:scooter-electric />
        </template>
      </YSelectOption>
    </YSelect>
  </Story>
</template>
