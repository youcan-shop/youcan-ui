<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Avatar } from '~/components';
import type { AvatarSize } from '~/components/Avatar/types';

const src = 'https://t4.ftcdn.net/jpg/02/66/72/41/240_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg';

const sizes: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
</script>

<template>
  <div class="container">
    <div class="grid">
      <span v-for="size in sizes" :key="size" class="label">
        {{ size }}
      </span>
      <span class="label">link</span>
      <span class="label">clickable</span>
      <Avatar v-for="size in sizes" :key="size" :source="src" :size="size" />
      <Avatar :source="src" url="https://developer.youcan.shop/" size="xxl" />
      <Avatar :source="src" size="xxl" clickable />
      <Avatar v-for="size in sizes" :key="size" initials="MAd" :size="size" />
      <Avatar initials="MA" url="https://developer.youcan.shop/" size="xxl" />
      <Avatar initials="MA" size="xxl" clickable />
      <Avatar v-for="size in sizes" :key="size" :size="size" />
      <Avatar size="xxl" url="https://developer.youcan.shop/" />
      <Avatar size="xxl" clickable />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 80px;
}

.container .label {
  font: var(--text-xl-medium);
  text-align: center;
  text-transform: uppercase;
}

.container .grid {
  display: grid;
  grid-template-columns: repeat(8, auto);
  gap: 40px;
}
</style>
