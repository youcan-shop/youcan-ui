<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { RadioList, RatingInput } from '~/components';
import type { RadioListOption } from '~/components/RadioList/types';

const movieRating = ref(0);
const options = ref<RadioListOption[]>([
  {
    label: 'Pizza',
    suffix: '🍕',
  },
  {
    label: 'Burger',
    suffix: '🍔',
  },
  {
    label: 'Burrito',
    suffix: '🌯',
  },
]);
// @ts-expect-error the v-model expects a RadioListOption but sets a string when value is changed.
const selectedOption = ref<RadioListOption>(options.value[0].label);
</script>

<template>
  <div class="container">
    <RadioList
      v-model="selectedOption"
      :options="options"
    />
    <RatingInput v-model="movieRating" :ceil="5" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 10%;
  gap: 30px;
}
</style>
