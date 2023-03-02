<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import RadioList from '~/components/RadioList/RadioList.vue';
import type { RadioListOption } from '~/components/RadioList/types';

const options = [
  { label: 'DHL Express - Morocco', suffix: '35 MAD' },
  { label: 'Amana Eco - Morocco', suffix: '40 MAD' },
];

const selected = ref<RadioListOption>();
</script>

<template>
  <div>
    <div class="container">
      <h3>Selected: {{ selected || 'nothing' }}</h3>
      <RadioList v-model="selected" :options="options" />
    </div>
  </div>
</template>

<style>
h3{
  font: var(--text-lg-regular)
}
.container {
  max-width: 600px;
  margin: auto;
  margin-top: 10%;
}
</style>
