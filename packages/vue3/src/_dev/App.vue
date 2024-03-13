<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Popover, PrimaryButton, TertiaryButton } from '~/components';
const show = ref(false);
</script>

<template>
  <div class="container">
    <Popover
      v-model:show="show"
      position="left"
      object-fit="cover"
      class="popover"
      @click-outside="show = false"
    >
      <template #title>
        Introducing Themes!
      </template>
      <template #description>
        <p class="mr-0">
          Introducing themes, a new way to make your store stand out
        </p>
      </template>
      <template #footer>
        <div class="actions">
          <PrimaryButton @click="show = false">
            Get started
          </PrimaryButton>
          <TertiaryButton @click="show = false">
            Later
          </TertiaryButton>
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
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
}

.actions {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  column-gap: 10px;
}
</style>
