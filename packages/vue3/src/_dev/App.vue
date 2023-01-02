<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import {
  Input,
} from '~/components';

const inputModel = ref();
</script>

<template>
  <div>
    <Input v-model="inputModel" placeholder="Placeholder text" />
    value: {{ inputModel }}
  </div>
</template>

<style scoped>
@import url('https://api.fontshare.com/css?f[]=satoshi@400,500,700,800&display=swap');

* {
  font: var(--text-md-regular);
}
</style>
