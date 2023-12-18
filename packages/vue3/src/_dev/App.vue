<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { RadioGroup } from '~/components';
import type { RadioData } from '~/components/Radio/types';

const languages = ref<RadioData[]>([
  {
    label: 'JavaScript',
    value: 'js',
  },
  {
    label: 'PHP',
    value: 'php',
  },
  {
    label: 'Python',
    value: 'python',
  },
]);
// @ts-expect-error the v-model expects a RadioData but sets a string when value is changed.
const preferredLanguage = ref<RadioData>(languages.value[0].value);
</script>

<template>
  <div class="container">
    <RadioGroup
      v-model="preferredLanguage"
      name="languages"
      :items="languages"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
</style>
