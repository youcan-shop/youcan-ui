<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Popover, PrimaryButton } from '~/components';
const show = ref(false);
</script>

<template>
  <div class="container">
    <Popover
      :show="show"
      position="right" object-fit="contain"
      @click-outside="show = false"
    >
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
