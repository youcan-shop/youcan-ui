<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Thumbnail } from '~/components';

const src = ref('');
</script>

<template>
  <Thumbnail :src="src" />
</template>
