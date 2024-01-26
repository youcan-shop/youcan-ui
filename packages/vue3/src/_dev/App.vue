<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Drawer, PrimaryButton } from '~/components';

const show = ref(false);
</script>

<template>
  <Drawer v-model:visible="show" position="left">
    <p v-for="index in 50" :key="index" class="content">
      The quick brown fox jumps over the lazy dog.
    </p>
    <template #footer>
      <div class="actions">
        <PrimaryButton @click="show = false;">
          <span>Save</span>
        </PrimaryButton>
      </div>
    </template>
  </Drawer>
  <div class="container">
    <PrimaryButton @click="show = true;">
      <span>Open Drawer</span>
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
}

.content {
  margin: 0;
  text-align: center;
}

.actions {
  display: flex;
  flex-direction: row-reverse;
}
</style>
