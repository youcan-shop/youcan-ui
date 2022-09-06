<script setup lang="ts">
import YSelect from './YSelect.vue';
import YSelectOption from './YSelectOption.vue';
</script>

<template>
  <Story>
    <YSelect>
      <YSelectOption>Select option</YSelectOption>
      <YSelectOption>
        Select option
        <template #icon>
          <i i-tabler:scooter-electric />
        </template>
      </YSelectOption>
    </YSelect>
  </Story>
</template>
