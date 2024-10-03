<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Thumbnail } from '~/components';
</script>

<template>
  <Thumbnail src="https://picsum.photos/200/300" alt="Mr. Shark" />
  <Thumbnail src="https://picsum.photos/200/300" alt="Mr. Shark" size="large" />
</template>
