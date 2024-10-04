<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Input, InputGroup } from '~/components';

const username = ref('');
const weight = ref('');
</script>

<template>
  <div class="container">
    <Input v-model="username" placeholder="Please enter your username" />
    <InputGroup label="New username">
      <template #input>
        <Input v-model="username" placeholder="Enter username" />
      </template>
    </InputGroup>
    <Input v-model="weight" type="number" placeholder="Enter weight" min="1">
      <template #suffix>
        Kg
      </template>
    </Input>

    <Input v-model="username" error placeholder="Please enter your username" />

    <InputGroup label="New username" error="The username field is required.">
      <template #input>
        <Input v-model="username" error placeholder="Enter username" />
      </template>
    </InputGroup>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
  gap: 10px;
  padding: 10px;
}
</style>
