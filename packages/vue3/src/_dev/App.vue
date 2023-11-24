<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import Modal from '~/components/Modal/Modal.vue';
import { PrimaryButton } from '~/components';
const showModal = ref(false);

const onConfirm = () => {
  /*
  * your code here
  */
};
</script>

<template>
  <Modal v-model:visible="showModal" @on-confirm="onConfirm">
    <p>
      Lorem ipsum dolor sit,
      Lorem ipsum dolor sit,
      Lorem ipsum dolor sit,
    </p>
  </Modal>
  <div class="container">
    <PrimaryButton @click="showModal = true;">
      <span>Show Modal</span>
    </PrimaryButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

p {
  margin-bottom: 0;
  color: var(--gray-600);
  font: var(--text-sm-regular);
}
</style>
