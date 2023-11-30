<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Increment } from '~/components';

const quantity = ref('0');
</script>

<template>
  <Increment v-model="quantity" :max="10" />
</template>
