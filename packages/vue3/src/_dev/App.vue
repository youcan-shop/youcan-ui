<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Thumbnail } from '~/components';

const imageSrc = 'https://i.imgur.com/YcP0tik.jpeg';
const imageAlt = 'Mr. Shark';
</script>

<template>
  <div class="container">
    <Thumbnail
      :src="imageSrc"
      :alt="imageAlt"
      size="large"
    />
    <Thumbnail
      :src="imageSrc"
      :alt="imageAlt"
      size="small"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 40vh;
  margin: 10%;
}
</style>
