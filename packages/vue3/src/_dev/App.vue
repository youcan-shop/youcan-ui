<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Note } from '~/components';
</script>

<template>
  <Note>
    <template #icon>
      📪
    </template>
    <template #content>
      <p>Don't forget to check your inbox, we have sent a link to verify your account.</p>
    </template>
  </Note>
</template>
