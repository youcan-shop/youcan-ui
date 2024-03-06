<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Input, InputGroup } from '~/components';

const username = ref('');
</script>

<template>
  <div class="container">
    <InputGroup>
      <template #label>
        New username
      </template>
      <template #input>
        <Input v-model="username" placeholder="Enter username" />
      </template>
      <template #info>
        You can only change your username once every 30 days
      </template>
    </InputGroup>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  margin-top: 40px;
}
</style>
