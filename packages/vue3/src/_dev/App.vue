<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Input, TextArea } from '~/components';

const comment = ref('');
</script>

<template>
  <div class="container">
    <TextArea
      v-model="comment"
      placeholder="Leave your comment"
    />
    <Input
      v-model="comment"
      placeholder="Leave your comment"
      type="password"
      can-show
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 40px auto;
  row-gap: 20px;
}
</style>
