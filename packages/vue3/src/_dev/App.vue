<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { reactive } from 'vue';
import Modal from '~/components/Modal/Modal.vue';
import PrimaryButton from '~/components/Button/PrimaryButton.vue';

const state = reactive({
  showModal: false,
  isLoading: false,
});

const clicked = async () => {
  state.isLoading = true;
  state.showModal = true;

  (await new Promise(resolve => setTimeout(resolve, 1000)));
  state.isLoading = false;
  state.showModal = false;
};
</script>

<template>
  <div class="container">
    <Modal v-model:visible="state.showModal" title="Edit profile">
      <p class="content">
        The quick brown fox jumps over the lazy dog.
      </p>
      <template #footer>
        <div class="footer">
          <PrimaryButton :disabled="state.isLoading" @click="clicked">
            Click me
          </PrimaryButton>
        </div>
      </template>
    </Modal>
    <PrimaryButton @click="state.showModal = true;">
      <span>Open Modal</span>
    </PrimaryButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 40px;
}

.footer {
  display: flex;
  justify-content: end;
}
</style>
