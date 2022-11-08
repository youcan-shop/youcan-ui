<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

const isChecked = ref(false);
</script>

<template>
  <Story>
    <div>
      <Checkbox v-model="isChecked" />
      <br>
      <div>{{ isChecked }}</div>
    </div>
  </Story>
</template>
