<script setup lang="ts">
import { ref } from 'vue';
import YSelectOption from './YSelectOption.vue';

const selectOption = ref('test_1');
</script>

<template>
  <div>
    <span>TODO: Implement me</span>
    <YSelectOption v-model="selectOption">
      Select option
      <template #icon>
        <i i-tabler:scooter-electric />
      </template>
    </YSelectOption>
  </div>
</template>
