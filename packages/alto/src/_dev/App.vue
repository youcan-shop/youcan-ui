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
