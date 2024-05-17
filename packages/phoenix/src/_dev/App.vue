<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Input, InputGroup } from '~/components';

const username = ref('');

const uid = 'username';
</script>

<template>
  <div class="container">
    <InputGroup label="New username" :label-for="uid" error="Username is required">
      <template #input>
        <Input :id="uid" v-model="username" placeholder="Enter username" />
      </template>
      <span class="info">
        You can only change your username once every 30 days
      </span>
    </InputGroup>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto;
}

.container .info {
  color: var(--gray-500);
  font: var(--text-sm-regular);
}
</style>
