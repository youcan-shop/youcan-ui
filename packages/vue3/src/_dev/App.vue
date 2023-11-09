<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Increment } from '~/components';

const value = ref('1');
</script>

<template>
  <div>
    <Increment v-model="value" :step="10" :min="1" :max="200" />
  </div>
</template>
