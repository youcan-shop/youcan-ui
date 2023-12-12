<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { PrimaryButton, ResourcePicker } from '~/components';

const showModal = ref(false);

const onConfirm = () => {
  alert('Hi');
  showModal.value = false;
};
</script>

<template>
  <div class="container">
    <ResourcePicker v-model:visible="showModal" @confirm="onConfirm" />
    <PrimaryButton @click="showModal = true;">
      <span>Open Modal</span>
    </PrimaryButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}
</style>
