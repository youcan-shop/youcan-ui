<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
</script>

<template>
  <div class="note">
    <div v-if="slots.icon" class="icon">
      <slot name="icon" class="icon" />
    </div>
    <div v-if="slots.content" class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.note {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: max-content;
  max-width: 100%;
  padding: 2px 25px;
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  background: var(--base-white);
  gap: 32px;
}

.note .icon {
  color: var(--brand-500);
}

.note .content {
  color: var(--gray-700);
  font: var(--text-sm-regular);
}
</style>
