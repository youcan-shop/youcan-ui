<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { TextArea } from '~/components';

const comment = ref('');
</script>

<template>
  <TextArea
    v-model="comment"
    placeholder="Leave your comment"
  />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
  gap: 10px;
  padding: 10px;
}
</style>
