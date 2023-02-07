<script setup lang="ts">
import { ref } from 'vue';
import RichText from '~/components/RichText/RichText.vue';

const content = ref('');
</script>

<template>
  <div>
    <RichText v-model="content" />
    <h1>Output</h1>
    <div v-html="content" />
  </div>
</template>

<style scoped>

</style>
