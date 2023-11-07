<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Increment } from '~/components';

const value = ref('1');
const step = ref(10);
const min = ref(-10);
const max = ref(200);

</script>

<template>
  <div>
    <Increment v-model="value" :step="step" :min="min" :max="max"/>
  </div>
</template>
