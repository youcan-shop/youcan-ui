<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Button, Popover } from '~/components';
const show = ref(false);
</script>

<template>
  <div class="container">
    <Popover
      v-model:show="show"
      position="top"
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
          <Button variant="primary" @click="show = false">
            Get started
          </Button>
          <Button variant="tertiary" @click="show = false">
            Later
          </Button>
        </div>
      </template>
      <Button variant="primary" @click="show = !show;">
        <span>Show Popover</span>
      </Button>
    </Popover>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  padding: 10px;
}

.mr-0 {
  margin: 0;
}

.actions {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  column-gap: 10px;
}

.popover {
  z-index: 99;
}
</style>
