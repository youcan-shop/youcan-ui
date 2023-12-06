<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Popover, PrimaryButton, TertiaryButton } from '~/components';
const show = ref(false);
</script>

<template>
  <div class="container">
    <Popover :show="show" position="right" @click-outside="show = false">
      <template #title>
        <span>Introducing Themes!</span>
      </template>
      <template #description>
        <p>
          Introducing themes, a new way to make your store stand out and make it more
          attractive towards your existing and potential clients.
        </p>
      </template>
      <template #footer>
        <div class="row">
          <TertiaryButton form="export-orders">
            Later
          </TertiaryButton>
          <PrimaryButton form="export-orders">
            Get started
          </PrimaryButton>
        </div>
      </template>
      <PrimaryButton @click="show = !show;">
        <span>Show Popover</span>
      </PrimaryButton>
    </Popover>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.row {
  display: flex;
  flex-direction: row;
  column-gap: 16px;
}

p {
  margin: 0;
}
</style>
