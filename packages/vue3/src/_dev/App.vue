<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Modal, PrimaryButton } from '~/components';

const showModal = ref(false);

const onConfirm = () => {
  showModal.value = false;
};
</script>

<template>
  <div class="container">
    <Modal v-model:visible="showModal" title="Edit profile" @on-confirm="onConfirm">
      <p class="content">
        The quick brown fox jumps over the lazy dog.
      </p>
    </Modal>
    <PrimaryButton @click="showModal = true;">
      <span>Open Modal</span>
    </PrimaryButton>
  </div>
</template>

<style scoped>
.content {
  margin: 0;
  text-align: center;
}
</style>
