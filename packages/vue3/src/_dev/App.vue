<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import RatingInput from '~/components/Rating/RatingInput.vue';

const value = ref(0);
</script>

<template>
  <RatingInput v-model="value" />
</template>
