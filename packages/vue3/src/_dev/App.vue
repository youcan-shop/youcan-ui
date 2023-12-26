<script setup lang="ts">
import 'uno.css';
import '~/assets/main.css';
import { ref } from 'vue';
import { Popover, PrimaryButton } from '~/components';
const show = ref(false);
</script>

<template>
  <div class="container">
    <Popover
      v-model:show="show"
      position="right"
      object-fit="contain"
    >
      <template #title>
        Introducing Themes!
      </template>
      <template #description>
        <p>
          Introducing themes, a new way to make yourstore stand out and make it
          more attractive towards your existing and potential clients.
        </p>
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
</style>
