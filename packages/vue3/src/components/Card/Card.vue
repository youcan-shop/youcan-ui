<script lang="ts" setup>
import { useSlots } from 'vue';

const slots = useSlots();
</script>

<template>
  <div class="card">
    <div v-if="slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div v-if="slots.body" class="card-body">
      <slot name="body" />
    </div>
    <div v-if="slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: 0 0 16px 0 #1219261a;

  > * {
    box-sizing: border-box;
    width: 100%;
  }

  &-header {
    padding: 10px 20px;
    border-bottom: 1px solid var(--gray-200);
  }

  &-body {
    padding: 20px;
    border-bottom: 1px solid var(--gray-200);
  }

  &-footer {
    padding: 15px 20px;
    background-color: var(--gray-50);
  }
}
</style>
