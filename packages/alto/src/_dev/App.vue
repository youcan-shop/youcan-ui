<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Button, Modal } from '~/components';

const showModal = ref(false);

const onConfirm = () => {
  showModal.value = false;
};
</script>

<template>
  <Modal v-model:visible="showModal" title="Edit profile" @on-confirm="onConfirm">
    <p class="content">
      The quick brown fox jumps over the lazy dog.
    </p>
  </Modal>
  <div class="container">
    <Button @click="showModal = true;">
      <span>Open Modal</span>
    </Button>
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
