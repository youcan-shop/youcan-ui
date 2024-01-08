<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { PrimaryButton, SecondaryButton, Toast, Toggle, Tooltip } from '~/components';

const show = ref(false);
const isActive = ref(false);
</script>

<template>
  <Toast :show="show" :close-after-duration="3000" position="bottom-right" type="success" @close="show = false">
    <template #title>
      Profile Updated
    </template>
    <template #description>
      Your profile information has been successfully updated.
    </template>
  </Toast>
  <div class="container">
    <PrimaryButton :disabled="show" @click="show = true;">
      <span>Show Toast</span>
    </PrimaryButton>
    <Toggle v-model="isActive" />
    <Tooltip label="Add to favorites" position="bottom">
      <SecondaryButton>
        Hover
      </SecondaryButton>
    </Tooltip>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  gap: 30px;
  margin: 10%;
}
</style>
