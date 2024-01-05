<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Alert, Badge, Checkbox } from '~/components';

const isChecked = ref(false);
</script>

<template>
  <div class="container">
    <Alert type="success">
      <template #title>
        Profile Updated
      </template>
      <template #description>
        Your profile information has been successfully updated.
      </template>
    </Alert>
    <Badge state="danger" :size="24">
      New
    </Badge>
    <Checkbox v-model="isChecked">
      <template #label>
        Accept terms and conditions
      </template>
    </Checkbox>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 10%;
  gap: 30px;
}
</style>
