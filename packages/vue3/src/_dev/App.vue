<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { RichText } from '~/components';

const content = ref();
</script>

<template>
  <div class="container">
    <RichText v-model="content" />
  </div>
</template>

<style scoped>
.container {
  margin: 30px;
}

.custom-class {
  color: var(--red-500); /* Change this to your desired color */
}

.avatar {
  width: 55px;
  height: 55px;
  overflow: hidden;
  transition: all 200ms linear;
  border: 2px solid var(--gray-300);
  border-radius: 50%;
  box-shadow: var(--shadow-md-brand);
  cursor: pointer;
}

.avatar:hover {
  border: 2px solid var(--gray-400);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
